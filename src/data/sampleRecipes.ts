

import { Recipe } from '@/types/Recipe';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  // Biryani - 5 items
  {
    name: "Chicken Biryani",
    ingredients: ["2 cups basmati rice", "500g chicken pieces", "2 onions sliced", "1 cup yogurt", "2 tbsp ginger-garlic paste", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Soak rice for 30 minutes", "Marinate chicken with yogurt and spices for 1 hour", "Fry onions until golden brown", "Cook marinated chicken until 70% done", "Boil rice with whole spices until 70% cooked", "Layer rice and chicken alternately", "Sprinkle fried onions, mint, and saffron milk", "Cook on dum for 45 minutes"],
    category: "biryani",
    prepTime: "2 hours",
    servings: "4-5"
  },
  {
    name: "Mutton Biryani",
    ingredients: ["2 cups basmati rice", "500g mutton pieces", "2 onions", "1 cup yogurt", "Garam masala", "Red chili powder", "Turmeric", "Saffron", "Mint leaves", "Ghee"],
    steps: ["Marinate mutton with yogurt and spices for 2 hours", "Cook mutton until tender", "Prepare rice with whole spices", "Layer cooked mutton and rice", "Garnish with fried onions and herbs", "Cook on dum for 1 hour"],
    category: "biryani",
    prepTime: "3 hours",
    servings: "4-5"
  },
  {
    name: "Vegetable Biryani",
    ingredients: ["2 cups basmati rice", "Mixed vegetables", "Paneer cubes", "Cashews", "Raisins", "Biryani masala", "Saffron", "Mint leaves", "Ghee", "Onions"],
    steps: ["Soak rice for 30 minutes", "Sauté vegetables with spices", "Cook rice with whole spices until 70% done", "Layer vegetables and rice", "Sprinkle nuts, raisins, and herbs", "Cook on dum for 30 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "4"
  },
  {
    name: "Prawn Biryani",
    ingredients: ["2 cups basmati rice", "500g prawns", "Coconut milk", "Curry leaves", "Mustard seeds", "Turmeric", "Red chili powder", "Garam masala", "Mint leaves", "Ghee"],
    steps: ["Clean and marinate prawns", "Cook prawns with spices", "Prepare rice with coconut milk", "Layer prawns and rice", "Garnish with herbs", "Cook on dum for 40 minutes"],
    category: "biryani",
    prepTime: "2 hours",
    servings: "4"
  },
  {
    name: "Egg Biryani",
    ingredients: ["2 cups basmati rice", "6 boiled eggs", "2 onions", "Tomatoes", "Yogurt", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Boil and fry eggs until golden", "Prepare masala gravy", "Cook rice with whole spices", "Layer eggs and rice with gravy", "Garnish with herbs and fried onions", "Cook on dum for 35 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "3-4"
  },

  // Shakes - 5 items
  {
    name: "Mango Shake",
    ingredients: ["2 ripe mangoes", "1 cup milk", "2 tbsp sugar", "Ice cubes", "Cardamom powder"],
    steps: ["Peel and chop mangoes", "Blend mangoes with milk and sugar", "Add ice cubes and cardamom", "Blend until smooth", "Serve chilled with garnish"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Chocolate Shake",
    ingredients: ["2 cups milk", "3 tbsp cocoa powder", "2 tbsp sugar", "Vanilla ice cream", "Chocolate chips", "Whipped cream"],
    steps: ["Heat milk slightly", "Mix cocoa powder and sugar", "Blend with ice cream", "Add chocolate chips", "Top with whipped cream", "Serve immediately"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  },
  {
    name: "Banana Shake",
    ingredients: ["3 ripe bananas", "1.5 cups milk", "2 tbsp honey", "Vanilla extract", "Ice cubes", "Nuts for garnish"],
    steps: ["Peel and slice bananas", "Blend bananas with milk", "Add honey and vanilla", "Blend with ice cubes", "Garnish with nuts", "Serve fresh"],
    category: "shakes",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Strawberry Shake",
    ingredients: ["1 cup fresh strawberries", "1 cup milk", "2 tbsp sugar", "Vanilla ice cream", "Ice cubes", "Fresh strawberries for garnish"],
    steps: ["Wash and hull strawberries", "Blend strawberries with milk", "Add sugar and ice cream", "Blend until smooth", "Garnish with fresh strawberries", "Serve chilled"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Oreo Shake",
    ingredients: ["8 Oreo cookies", "1.5 cups milk", "Vanilla ice cream", "Chocolate syrup", "Whipped cream", "Crushed Oreos for topping"],
    steps: ["Crush 6 Oreo cookies", "Blend with milk and ice cream", "Add chocolate syrup", "Blend until smooth", "Top with whipped cream", "Garnish with crushed Oreos"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  },

  // Soups - 5 items
  {
    name: "Tomato Soup",
    ingredients: ["6 large tomatoes", "1 onion", "2 garlic cloves", "Fresh basil", "Vegetable broth", "Heavy cream", "Salt", "Black pepper", "Olive oil"],
    steps: ["Roast tomatoes and onions", "Sauté garlic in olive oil", "Blend roasted vegetables with broth", "Strain the mixture", "Add cream and seasonings", "Garnish with basil and serve hot"],
    category: "soups",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chicken Corn Soup",
    ingredients: ["200g chicken breast", "1 cup sweet corn", "3 cups chicken broth", "2 eggs", "2 tbsp cornstarch", "Soy sauce", "White pepper", "Spring onions", "Ginger"],
    steps: ["Boil and shred chicken", "Heat chicken broth", "Add corn and chicken", "Mix cornstarch with water", "Add to soup while stirring", "Beat eggs and add slowly", "Season and garnish"],
    category: "soups",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Vegetable Soup",
    ingredients: ["Mixed vegetables", "Vegetable broth", "Onion", "Garlic", "Herbs", "Olive oil", "Salt", "Black pepper", "Bay leaves"],
    steps: ["Chop all vegetables", "Sauté onions and garlic", "Add vegetables and broth", "Simmer with herbs", "Season to taste", "Serve hot with bread"],
    category: "soups",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Mushroom Soup",
    ingredients: ["500g mushrooms", "2 onions", "3 garlic cloves", "Vegetable broth", "Heavy cream", "Thyme", "Bay leaves", "Butter", "Salt", "White pepper"],
    steps: ["Slice mushrooms and onions", "Sauté in butter until golden", "Add garlic and herbs", "Pour in broth and simmer", "Blend partially for texture", "Add cream and season"],
    category: "soups",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Hot and Sour Soup",
    ingredients: ["200g tofu", "Mushrooms", "Bamboo shoots", "Chicken broth", "Soy sauce", "Vinegar", "Chili sauce", "Cornstarch", "Egg", "Spring onions"],
    steps: ["Slice tofu and vegetables", "Heat chicken broth", "Add vegetables and tofu", "Mix sauces and add to soup", "Thicken with cornstarch", "Add beaten egg slowly", "Garnish and serve"],
    category: "soups",
    prepTime: "20 minutes",
    servings: "3-4"
  },

  // Salads - 5 items
  {
    name: "Caesar Salad",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Anchovy fillets", "Garlic", "Lemon juice", "Olive oil", "Black pepper"],
    steps: ["Wash and chop lettuce", "Prepare Caesar dressing", "Toss lettuce with dressing", "Add croutons and cheese", "Garnish with anchovies", "Serve immediately"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "2-3"
  },
  {
    name: "Greek Salad",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Olives", "Olive oil", "Lemon juice", "Oregano", "Salt", "Black pepper"],
    steps: ["Chop all vegetables", "Crumble feta cheese", "Mix vegetables and cheese", "Prepare dressing with oil and lemon", "Toss salad with dressing", "Top with olives and oregano"],
    category: "salads",
    prepTime: "10 minutes",
    servings: "2-3"
  },
  {
    name: "Garden Salad",
    ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Carrots", "Bell peppers", "Red onion", "Olive oil", "Balsamic vinegar", "Salt", "Herbs"],
    steps: ["Wash and prepare all vegetables", "Slice vegetables uniformly", "Mix all vegetables in a bowl", "Prepare vinaigrette", "Toss salad with dressing", "Serve fresh"],
    category: "salads",
    prepTime: "12 minutes",
    servings: "3-4"
  },
  {
    name: "Fruit Salad",
    ingredients: ["Apple", "Orange", "Grapes", "Strawberries", "Kiwi", "Pineapple", "Honey", "Lemon juice", "Mint leaves", "Chaat masala"],
    steps: ["Wash and chop all fruits", "Mix fruits in a large bowl", "Drizzle with honey and lemon", "Add chaat masala", "Garnish with mint", "Chill before serving"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Quinoa Salad",
    ingredients: ["1 cup quinoa", "Cherry tomatoes", "Cucumber", "Red bell pepper", "Red onion", "Parsley", "Lemon juice", "Olive oil", "Salt", "Black pepper"],
    steps: ["Cook quinoa and let cool", "Chop all vegetables", "Mix quinoa with vegetables", "Prepare lemon vinaigrette", "Toss salad with dressing", "Let flavors meld before serving"],
    category: "salads",
    prepTime: "25 minutes",
    servings: "3-4"
  }
];
