
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  image?: string;
  prepTime?: string;
  servings?: string;
  category: 
    | 'biryani'
    | 'fried-rice'
    | 'pickles'
    | 'shakes'
    | 'soups'
    | 'salads'
    | 'detox-water'
    | 'curries'
    | 'non-veg-curries'
    | 'snacks'
    | 'juices'
    | 'desserts-sweets'
    | 'breakfast'
    | 'street-food'
    | 'south-indian'
    | 'north-indian'
    | 'chinese'
    | 'italian'
    | 'mexican'
    | 'rice-varieties'
    | 'roti-paratha'
    | 'gravy-dishes'
    | 'tandoori'
    | 'stir-fry'
    | 'healthy-low-cal'
    | 'festive-specials'
    | 'one-pot-meals'
    | 'baking-cakes'
    | 'ice-creams'
    | 'sandwiches-wraps'
    | 'dips-chutneys'
    | 'beverages-mocktails'
    | 'kids-special'
    | 'party-starters'
    | 'quick-easy'
    | 'lunch-box'
    | 'other';
}
