export interface Recipe {
  id: number;
  slug: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  prepTime: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  diet: 'veg' | 'non-veg';
  emoji: string;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1, slug: "classic-oatmeal-with-banana", name: "Classic Oatmeal with Banana",
    calories: 320, protein: 10, carbs: 58, fats: 6, prepTime: "5 mins",
    type: "breakfast", diet: "veg", emoji: "🥣",
    ingredients: ["½ cup rolled oats", "1 cup milk", "1 banana", "1 tsp honey", "pinch of cinnamon"],
    steps: ["Heat milk in a pot over medium heat", "Add oats and cook for 5 minutes stirring occasionally", "Pour into bowl and top with sliced banana", "Drizzle honey and sprinkle cinnamon"],
  },
  {
    id: 2, slug: "peanut-butter-toast", name: "Peanut Butter Toast",
    calories: 380, protein: 14, carbs: 48, fats: 16, prepTime: "5 mins",
    type: "breakfast", diet: "veg", emoji: "🍞",
    ingredients: ["2 slices whole wheat bread", "2 tbsp peanut butter", "1 banana", "1 tsp honey"],
    steps: ["Toast the bread until golden", "Spread peanut butter evenly on both slices", "Top with banana slices", "Drizzle honey and serve"],
  },
  {
    id: 3, slug: "greek-yogurt-parfait", name: "Greek Yogurt Parfait",
    calories: 290, protein: 18, carbs: 38, fats: 5, prepTime: "5 mins",
    type: "breakfast", diet: "veg", emoji: "🫙",
    ingredients: ["1 cup Greek yogurt", "¼ cup granola", "½ cup mixed berries", "1 tsp honey"],
    steps: ["Add Greek yogurt to a bowl or glass", "Layer granola on top", "Add mixed berries", "Drizzle honey and serve immediately"],
  },
  {
    id: 4, slug: "banana-smoothie", name: "Banana Smoothie",
    calories: 310, protein: 12, carbs: 52, fats: 8, prepTime: "5 mins",
    type: "breakfast", diet: "veg", emoji: "🥤",
    ingredients: ["1 banana", "1 cup milk", "1 tbsp peanut butter", "1 tsp honey", "handful of ice"],
    steps: ["Add all ingredients to a blender", "Blend until completely smooth", "Pour into a glass and drink immediately"],
  },
  {
    id: 5, slug: "scrambled-eggs-on-toast", name: "Scrambled Eggs on Toast",
    calories: 350, protein: 18, carbs: 32, fats: 14, prepTime: "10 mins",
    type: "breakfast", diet: "non-veg", emoji: "🍳",
    ingredients: ["2 eggs", "1 tsp butter", "2 slices whole wheat bread", "salt", "pepper"],
    steps: ["Whisk eggs with salt and pepper", "Melt butter in pan over low heat", "Add eggs and stir constantly until just set", "Toast bread and serve eggs on top"],
  },
  {
    id: 6, slug: "peanut-butter-banana-sandwich", name: "Peanut Butter Banana Sandwich",
    calories: 420, protein: 14, carbs: 62, fats: 16, prepTime: "5 mins",
    type: "lunch", diet: "veg", emoji: "🥪",
    ingredients: ["2 slices whole wheat bread", "2 tbsp peanut butter", "1 banana", "1 tsp honey"],
    steps: ["Spread peanut butter on one slice of bread", "Slice banana and layer on top", "Drizzle honey", "Close sandwich and serve"],
  },
  {
    id: 7, slug: "veggie-quesadilla", name: "Veggie Quesadilla",
    calories: 380, protein: 16, carbs: 42, fats: 14, prepTime: "15 mins",
    type: "lunch", diet: "veg", emoji: "🫓",
    ingredients: ["2 flour tortillas", "½ cup shredded cheese", "½ bell pepper", "¼ onion", "1 tsp olive oil"],
    steps: ["Dice bell pepper and onion", "Sauté vegetables in olive oil for 5 minutes", "Layer cheese and veggies on one tortilla", "Fold tortilla and cook each side 2 minutes until golden"],
  },
  {
    id: 8, slug: "avocado-toast", name: "Avocado Toast",
    calories: 340, protein: 8, carbs: 36, fats: 18, prepTime: "10 mins",
    type: "lunch", diet: "veg", emoji: "🥑",
    ingredients: ["2 slices whole wheat bread", "1 avocado", "1 tsp lemon juice", "salt", "red pepper flakes"],
    steps: ["Toast bread until golden and crispy", "Mash avocado with lemon juice and salt", "Spread avocado on toast", "Top with red pepper flakes and serve"],
  },
  {
    id: 9, slug: "caprese-salad", name: "Caprese Salad",
    calories: 280, protein: 16, carbs: 8, fats: 20, prepTime: "10 mins",
    type: "lunch", diet: "veg", emoji: "🥗",
    ingredients: ["4 oz fresh mozzarella", "2 medium tomatoes", "fresh basil leaves", "1 tbsp olive oil", "salt and pepper"],
    steps: ["Slice tomatoes and mozzarella into even rounds", "Alternate tomato and mozzarella on a plate", "Tuck basil leaves between slices", "Drizzle olive oil and season with salt and pepper"],
  },
  {
    id: 10, slug: "tuna-sandwich", name: "Tuna Sandwich",
    calories: 390, protein: 28, carbs: 34, fats: 12, prepTime: "10 mins",
    type: "lunch", diet: "non-veg", emoji: "🥪",
    ingredients: ["1 can tuna", "1 tbsp mayo", "2 slices whole wheat bread", "lettuce leaves", "tomato slices"],
    steps: ["Drain tuna and mix with mayo", "Layer lettuce and tomato on bread", "Add tuna mixture", "Close sandwich and serve"],
  },
  {
    id: 11, slug: "chicken-caesar-wrap", name: "Chicken Caesar Wrap",
    calories: 450, protein: 32, carbs: 38, fats: 16, prepTime: "15 mins",
    type: "lunch", diet: "non-veg", emoji: "🌯",
    ingredients: ["4 oz rotisserie chicken", "1 flour tortilla", "romaine lettuce", "1 tbsp Caesar dressing", "1 tbsp parmesan"],
    steps: ["Shred rotisserie chicken into pieces", "Toss lettuce with Caesar dressing", "Layer chicken and lettuce on tortilla", "Sprinkle parmesan and wrap tightly"],
  },
  {
    id: 12, slug: "garlic-pasta-olive-oil", name: "Garlic Pasta with Olive Oil",
    calories: 420, protein: 12, carbs: 62, fats: 14, prepTime: "20 mins",
    type: "dinner", diet: "veg", emoji: "🍝",
    ingredients: ["2 oz pasta", "3 cloves garlic", "2 tbsp olive oil", "2 tbsp parmesan", "red pepper flakes", "salt"],
    steps: ["Cook pasta in salted water according to package", "Slice garlic and sauté in olive oil 2 minutes", "Drain pasta and toss with garlic oil", "Top with parmesan and red pepper flakes"],
  },
  {
    id: 13, slug: "tomato-pasta", name: "Tomato Pasta",
    calories: 380, protein: 12, carbs: 66, fats: 8, prepTime: "20 mins",
    type: "dinner", diet: "veg", emoji: "🍝",
    ingredients: ["2 oz pasta", "1 cup canned tomatoes", "2 cloves garlic", "1 tbsp olive oil", "fresh basil", "salt"],
    steps: ["Cook pasta in salted water", "Sauté garlic in olive oil 1 minute", "Add canned tomatoes and simmer 10 minutes", "Toss with pasta and fresh basil"],
  },
  {
    id: 14, slug: "black-bean-tacos", name: "Black Bean Tacos",
    calories: 360, protein: 14, carbs: 54, fats: 10, prepTime: "15 mins",
    type: "dinner", diet: "veg", emoji: "🌮",
    ingredients: ["3 corn tortillas", "½ cup canned black beans", "¼ cup shredded cheese", "2 tbsp salsa", "1 tbsp sour cream", "1 lime"],
    steps: ["Warm tortillas in a dry pan 1 minute each side", "Heat black beans in a small pot", "Fill tortillas with beans and cheese", "Top with salsa and sour cream and squeeze lime"],
  },
  {
    id: 15, slug: "vegetable-stir-fry-rice", name: "Vegetable Stir Fry with Rice",
    calories: 390, protein: 10, carbs: 68, fats: 10, prepTime: "20 mins",
    type: "dinner", diet: "veg", emoji: "🥘",
    ingredients: ["1 cup cooked rice", "2 cups mixed vegetables", "2 tbsp soy sauce", "2 cloves garlic", "1 tbsp olive oil", "1 tsp sesame oil"],
    steps: ["Heat olive oil in a wok or large pan", "Add garlic and stir fry 1 minute", "Add vegetables and stir fry 5 minutes", "Add soy sauce and sesame oil, serve over rice"],
  },
  {
    id: 16, slug: "chicken-rice-bowl", name: "Chicken Rice Bowl",
    calories: 480, protein: 36, carbs: 52, fats: 10, prepTime: "25 mins",
    type: "dinner", diet: "non-veg", emoji: "🍚",
    ingredients: ["4 oz chicken breast", "1 cup cooked rice", "2 tbsp soy sauce", "2 cloves garlic", "1 tbsp olive oil", "green onions"],
    steps: ["Slice chicken breast into thin strips", "Cook in olive oil with garlic 8 minutes until done", "Add soy sauce and toss to coat", "Serve over rice and top with sliced green onions"],
  },
  {
    id: 17, slug: "egg-fried-rice", name: "Egg Fried Rice",
    calories: 410, protein: 16, carbs: 58, fats: 12, prepTime: "20 mins",
    type: "dinner", diet: "non-veg", emoji: "🍳",
    ingredients: ["1 cup cooked rice", "2 eggs", "2 tbsp soy sauce", "2 cloves garlic", "1 tbsp olive oil", "green onions"],
    steps: ["Heat oil in pan and scramble eggs, set aside", "Add garlic to pan and cook 1 minute", "Add rice and stir fry 3 minutes", "Add eggs back and soy sauce, top with green onions"],
  },
  {
    id: 18, slug: "tuna-rice-bowl", name: "Tuna Rice Bowl",
    calories: 390, protein: 30, carbs: 48, fats: 8, prepTime: "10 mins",
    type: "dinner", diet: "non-veg", emoji: "🐟",
    ingredients: ["1 can tuna", "1 cup cooked rice", "1 tbsp soy sauce", "1 tbsp mayo", "½ cucumber", "sesame seeds"],
    steps: ["Mix tuna with mayo and soy sauce", "Slice cucumber into thin rounds", "Serve tuna mixture over rice", "Top with cucumber and sesame seeds"],
  },
  {
    id: 19, slug: "apple-peanut-butter", name: "Apple with Peanut Butter",
    calories: 280, protein: 8, carbs: 36, fats: 14, prepTime: "2 mins",
    type: "snack", diet: "veg", emoji: "🍎",
    ingredients: ["1 medium apple", "2 tbsp peanut butter"],
    steps: ["Slice apple into wedges", "Serve with peanut butter for dipping"],
  },
  {
    id: 20, slug: "protein-smoothie", name: "Protein Smoothie",
    calories: 320, protein: 14, carbs: 44, fats: 10, prepTime: "5 mins",
    type: "snack", diet: "non-veg", emoji: "🥤",
    ingredients: ["1 cup milk", "1 banana", "2 tbsp peanut butter", "1 tsp honey", "handful of ice"],
    steps: ["Add all ingredients to a blender", "Blend on high until completely smooth", "Pour into a glass and serve immediately"],
  },
];
