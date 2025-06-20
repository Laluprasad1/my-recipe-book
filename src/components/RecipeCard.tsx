import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const getCategoryLabel = (category: Recipe['category']) => {
    switch (category) {
      case 'biryani': return 'Biryani';
      case 'fried-rice': return 'Fried Rice';
      case 'pickles': return 'Pickles';
      case 'shakes': return 'Shakes';
      case 'soups': return 'Soups';
      case 'salads': return 'Salads';
      case 'detox-water': return 'Detox Water';
      case 'curries': return 'Curries';
      case 'non-veg-curries': return 'Non-Veg Curries';
      case 'snacks': return 'Snacks';
      case 'juices': return 'Juices';
      case 'desserts-sweets': return 'Desserts & Sweets';
      case 'breakfast': return 'Breakfast';
      case 'street-food': return 'Street Food';
      case 'south-indian': return 'South Indian';
      case 'north-indian': return 'North Indian';
      case 'chinese': return 'Chinese';
      case 'italian': return 'Italian';
      case 'mexican': return 'Mexican';
      case 'rice-varieties': return 'Rice Varieties';
      case 'roti-paratha': return 'Roti & Paratha';
      case 'gravy-dishes': return 'Gravy Dishes';
      case 'tandoori': return 'Tandoori';
      case 'stir-fry': return 'Stir Fry';
      case 'healthy-low-cal': return 'Healthy';
      case 'festive-specials': return 'Festive';
      case 'one-pot-meals': return 'One-Pot';
      case 'baking-cakes': return 'Baking';
      case 'ice-creams': return 'Ice Creams';
      case 'sandwiches-wraps': return 'Sandwiches';
      case 'dips-chutneys': return 'Dips & Chutneys';
      case 'beverages-mocktails': return 'Beverages';
      case 'kids-special': return 'Kids Special';
      case 'party-starters': return 'Party Starters';
      case 'quick-easy': return 'Quick & Easy';
      case 'lunch-box': return 'Lunch Box';
      default: return 'Other';
    }
  };

  const getCategoryColor = (category: Recipe['category']) => {
    switch (category) {
      case 'biryani': return 'bg-amber-100 text-amber-800';
      case 'fried-rice': return 'bg-yellow-100 text-yellow-800';
      case 'pickles': return 'bg-green-100 text-green-800';
      case 'shakes': return 'bg-pink-100 text-pink-800';
      case 'soups': return 'bg-blue-100 text-blue-800';
      case 'salads': return 'bg-emerald-100 text-emerald-800';
      case 'detox-water': return 'bg-cyan-100 text-cyan-800';
      case 'curries': return 'bg-orange-100 text-orange-800';
      case 'non-veg-curries': return 'bg-red-100 text-red-800';
      case 'snacks': return 'bg-purple-100 text-purple-800';
      case 'juices': return 'bg-lime-100 text-lime-800';
      case 'desserts-sweets': return 'bg-rose-100 text-rose-800';
      case 'breakfast': return 'bg-yellow-100 text-yellow-800';
      case 'street-food': return 'bg-orange-100 text-orange-800';
      case 'south-indian': return 'bg-green-100 text-green-800';
      case 'north-indian': return 'bg-red-100 text-red-800';
      case 'chinese': return 'bg-red-100 text-red-800';
      case 'italian': return 'bg-green-100 text-green-800';
      case 'mexican': return 'bg-yellow-100 text-yellow-800';
      case 'rice-varieties': return 'bg-amber-100 text-amber-800';
      case 'roti-paratha': return 'bg-orange-100 text-orange-800';
      case 'gravy-dishes': return 'bg-red-100 text-red-800';
      case 'tandoori': return 'bg-orange-100 text-orange-800';
      case 'stir-fry': return 'bg-green-100 text-green-800';
      case 'healthy-low-cal': return 'bg-emerald-100 text-emerald-800';
      case 'festive-specials': return 'bg-purple-100 text-purple-800';
      case 'one-pot-meals': return 'bg-blue-100 text-blue-800';
      case 'baking-cakes': return 'bg-pink-100 text-pink-800';
      case 'ice-creams': return 'bg-cyan-100 text-cyan-800';
      case 'sandwiches-wraps': return 'bg-yellow-100 text-yellow-800';
      case 'dips-chutneys': return 'bg-green-100 text-green-800';
      case 'beverages-mocktails': return 'bg-blue-100 text-blue-800';
      case 'kids-special': return 'bg-pink-100 text-pink-800';
      case 'party-starters': return 'bg-purple-100 text-purple-800';
      case 'quick-easy': return 'bg-lime-100 text-lime-800';
      case 'lunch-box': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryImage = (recipe: Recipe) => {
    const { category, name } = recipe;
    const lowerCaseName = name.toLowerCase();

    if (category === 'biryani') {
      if (lowerCaseName.includes('chicken')) {
        return 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg';
      }
      if (lowerCaseName.includes('mutton')) {
        return 'https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg';
      }
      if (lowerCaseName.includes('vegetable') || lowerCaseName.includes('veg')) {
        return 'https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg';
      }
      if (lowerCaseName.includes('egg')) {
        return 'https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg';
      }
      if (lowerCaseName.includes('prawn')) {
        return 'https://images.pexels.com/photos/9609861/pexels-photo-9609861.jpeg';
      }else {
        return 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg';
      }
    }

    if (category === 'shakes') {
      if (lowerCaseName.includes('mango')) {
        return 'https://images.pexels.com/photos/5150211/pexels-photo-5150211.jpeg';
      }
      if (lowerCaseName.includes('chocolate')) {
        return 'https://images.pexels.com/photos/2128271/pexels-photo-2128271.jpeg';
      }
      if (lowerCaseName.includes('banana')) {
        return 'https://images.pexels.com/photos/7491906/pexels-photo-7491906.jpeg';
      }
      if (lowerCaseName.includes('strawberry')) {
        return 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg';
      }
      if (lowerCaseName.includes('oreo')) {
        return 'https://images.pexels.com/photos/28525199/pexels-photo-28525199.jpeg';
      }
    } 
    //soups
   if (category === 'soups') {
      if (lowerCaseName.includes('tomato')) {
        return 'https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg';
      }
      if (lowerCaseName.includes('chicken')) {
        return 'https://images.pexels.com/photos/2532442/pexels-photo-2532442.jpeg';
      }
      if (lowerCaseName.includes('vegetable') || lowerCaseName.includes('veg')) {
        return 'https://images.pexels.com/photos/2664221/pexels-photo-2664221.jpeg';
      }
      if (lowerCaseName.includes('mushroom')) {
        return 'https://images.pexels.com/photos/4103375/pexels-photo-4103375.jpeg';
      }
      if (lowerCaseName.includes('hot') || lowerCaseName.includes('sour')) {
        return 'https://images.pexels.com/photos/18265285/pexels-photo-18265285.jpeg';
      }
    }

    if (category === 'salads') {
      if (lowerCaseName.includes('caesar')) {
        return 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg';
      }
      if (lowerCaseName.includes('fruit')) {
        return 'https://images.pexels.com/photos/838846/pexels-photo-838846.jpeg';
      }
      if (lowerCaseName.includes('greek')) {
        return 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg';
      }
      if (lowerCaseName.includes('garden')) {
        return 'https://images.pexels.com/photos/32640458/pexels-photo-32640458.jpeg';
      }
      if (lowerCaseName.includes('quinoa')) {
        return 'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg';
      }
    }

    // You can add more special handling for other categories here. For example:
    if (category === 'curries' || category === 'non-veg-curries') {
      if (lowerCaseName.includes('paneer')) {
        return 'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg';
      }
      if (lowerCaseName.includes('fish')) {
        return 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg';
      }
    }

    // Fallback to the generic category image map
    const imageMap: { [key: string]: string } = {
      'biryani': 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      'fried-rice': 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg',
      'pickles': 'https://images.pexels.com/photos/5951869/pexels-photo-5951869.jpeg',
      'shakes': 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg',
      'soups': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
      'salads': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
      'detox-water': 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg',
      'curries': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      'non-veg-curries': 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg',
      'snacks': 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg',
      'juices': 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
      'desserts-sweets': 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      'breakfast': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      'street-food': 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      'south-indian': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'north-indian': 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      'chinese': 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      'italian': 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg',
      'mexican': 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
      'rice-varieties': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'roti-paratha': 'https://images.pexels.com/photos/9410603/pexels-photo-9410603.jpeg',
      'gravy-dishes': 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg',
      'tandoori': 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg',
      'stir-fry': 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
      'healthy-low-cal': 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg',
      'festive-specials': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      'one-pot-meals': 'https://images.pexels.com/photos/5848493/pexels-photo-5848493.jpeg',
      'baking-cakes': 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg',
      'ice-creams': 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      'sandwiches-wraps': 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg',
      'dips-chutneys': 'https://images.pexels.com/photos/5620877/pexels-photo-5620877.jpeg',
      'beverages-mocktails': 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg',
      'kids-special': 'https://images.pexels.com/photos/3662132/pexels-photo-3662132.jpeg',
      'party-starters': 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
      'quick-easy': 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
      'lunch-box': 'https://images.pexels.com/photos/8089272/pexels-photo-8089272.jpeg',
    };
    return imageMap[category] || '';
  };

  const categoryImage = getCategoryImage(recipe);

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border-orange-100 hover:border-orange-300"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        {recipe.image || categoryImage ? (
          <div className="relative">
            <img
              src={recipe.image || categoryImage}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <Badge 
              className={'absolute top-2 left-2 ${getCategoryColor(recipe.category)}'}
            >
              {getCategoryLabel(recipe.category)}
            </Badge>
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-t-lg flex items-center justify-center relative">
            <ChefHat className="h-12 w-12 text-orange-400" />
            <Badge 
              className={'absolute top-2 left-2 ${getCategoryColor(recipe.category)}'}
            >
              {getCategoryLabel(recipe.category)}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {recipe.name}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          {recipe.prepTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
          )}
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings}</span>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-medium">{recipe.ingredients.length}</span> ingredients
          </p>
          <p>
            <span className="font-medium">{recipe.steps.length}</span> steps
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 line-clamp-2">
            {recipe.ingredients.slice(0, 3).join(', ')}
            {recipe.ingredients.length > 3 && '...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
