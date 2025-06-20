import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/types/Recipe';

interface RecipeDetailModalProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, isOpen, onClose }) => {
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
    return imageMap[recipe.category] || '';
  };

  const imageUrl = recipe.image || getCategoryImage(recipe);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {recipe.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Recipe Image */}
          {imageUrl ? (
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
              <ChefHat className="h-16 w-16 text-orange-400" />
            </div>
          )}

          {/* Recipe Meta Information */}
          <div className="flex flex-wrap gap-4">
            {recipe.prepTime && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {recipe.prepTime}
              </Badge>
            )}
            {recipe.servings && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {recipe.servings}
              </Badge>
            )}
            <Badge variant="outline">
              {recipe.ingredients.length} ingredients
            </Badge>
            <Badge variant="outline">
              {recipe.steps.length} steps
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation Steps</h3>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm font-medium rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetailModal;
