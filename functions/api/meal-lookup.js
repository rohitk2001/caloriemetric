export async function onRequestPost(context) {
  const { request, env } = context;

  const origin = request.headers.get('Origin') || 'https://caloriemetric.com';

  let body;
  try {
    body = await request.json();
  } catch(e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const { input } = body;

  if (!input || typeof input !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid input' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 500,
        temperature: 0.1,
        messages: [
          {
            role: 'system',
            content: 'You are a nutrition expert. Only respond about food and calories. Always return valid JSON only. Format: {"foods": [{"name": "food name", "calories": number, "portion": "portion description"}], "total_calories": number, "confidence": "high/medium/low"}'
          },
          {
            role: 'user',
            content: `Food description: """${input}"""`
          }
        ]
      })
    });

    const text = await groqResponse.text();

    return new Response(text, {
      status: groqResponse.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: 'fetch_failed',
      detail: error.message
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
