const DAILY_LIMIT = 20;
const allowedOrigins = ['https://caloriemetric.com', 'https://www.caloriemetric.com'];

function getCorsHeaders(origin) {
  const allowed = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

async function getRateLimitKey(ip) {
  const today = new Date().toISOString().slice(0, 10);
  return `rl:${ip}:${today}`;
}

async function checkRateLimit(env, ip) {
  const key = await getRateLimitKey(ip);
  const cache = caches.default;
  const cacheUrl = `https://caloriemetric.com/__rl/${key}`;

  const cached = await cache.match(cacheUrl);
  const count = cached ? parseInt(await cached.text(), 10) : 0;

  if (count >= DAILY_LIMIT) return { allowed: false, count };

  const newCount = count + 1;
  const now = new Date();
  const midnight = new Date(now);
  midnight.setUTCHours(24, 0, 0, 0);
  const secondsUntilMidnight = Math.ceil((midnight - now) / 1000);

  const response = new Response(String(newCount), {
    headers: { 'Cache-Control': `public, max-age=${secondsUntilMidnight}` },
  });
  await cache.put(cacheUrl, response);

  return { allowed: true, count: newCount };
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('Origin') ?? '';
  const corsHeaders = getCorsHeaders(origin);

  const ip =
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    '0.0.0.0';

  const { allowed } = await checkRateLimit(env, ip);
  if (!allowed) {
    return new Response(JSON.stringify({ error: 'rate_limit' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  let input;
  try {
    const body = await request.json();
    input = String(body.input ?? '').slice(0, 500).trim();
  } catch {
    return new Response(JSON.stringify({ error: 'bad_request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  if (!input) {
    return new Response(JSON.stringify({ error: 'empty_input' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const groqApiKey = env.GROQ_API_KEY;
  if (!groqApiKey) {
    console.error('[meal-lookup] GROQ_API_KEY not configured');
    return new Response(JSON.stringify({ error: 'server_error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${groqApiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content:
              'You are a nutrition expert. Only respond about food and calories. If asked about anything else, respond with: {"error": "not food"}. Always return valid JSON only. Format: {"foods": [{"name": "food name", "calories": number, "portion": "portion description"}], "total_calories": number, "confidence": "high/medium/low"}',
          },
          { role: 'user', content: `Food description: """${input}"""` },
        ],
        temperature: 0.1,
        max_tokens: 500,
      }),
    });

    if (groqRes.status === 429) {
      return new Response(JSON.stringify({ error: 'upstream_rate_limit' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!groqRes.ok) {
      console.error('[meal-lookup] Groq error', groqRes.status);
      return new Response(JSON.stringify({ error: 'upstream_error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const data = await groqRes.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('[meal-lookup] fetch failed', err);
    return new Response(JSON.stringify({ error: 'server_error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') ?? '';
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}
