
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Minus, Upload } from 'lucide-react';
import { Recipe } from '@/types/Recipe';

interface EditRecipeFormProps {
  recipe: Recipe;
  onSubmit: (recipe: Omit<Recipe, 'id'>) => void;
  onCancel: () => void;
}

const EditRecipeForm: React.FC<EditRecipeFormProps> = ({ recipe, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: recipe.name,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    prepTime: recipe.prepTime || '',
    servings: recipe.servings || '',
    image: recipe.image || '',
    category: recipe.category,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | Recipe['category']) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleArrayChange = (field: 'ingredients' | 'steps', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'ingredients' | 'steps') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'ingredients' | 'steps', index: number) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Recipe name is required';
    }

    const validIngredients = formData.ingredients.filter(ing => ing.trim());
    if (validIngredients.length === 0) {
      newErrors.ingredients = 'At least one ingredient is required';
    }

    const validSteps = formData.steps.filter(step => step.trim());
    if (validSteps.length === 0) {
      newErrors.steps = 'At least one preparation step is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const updatedRecipe: Omit<Recipe, 'id'> = {
      name: formData.name.trim(),
      ingredients: formData.ingredients.filter(ing => ing.trim()),
      steps: formData.steps.filter(step => step.trim()),
      prepTime: formData.prepTime.trim() || undefined,
      servings: formData.servings.trim() || undefined,
      image: formData.image || undefined,
      category: formData.category,
    };

    onSubmit(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Recipe Name */}
      <div>
        <Label htmlFor="recipeName">Recipe Name *</Label>
        <Input
          id="recipeName"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Enter recipe name"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Category Selection */}
      <div>
        <Label htmlFor="category">Category *</Label>
        <Select 
          value={formData.category} 
          onValueChange={(value: Recipe['category']) => handleInputChange('category', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            <SelectItem value="biryani">Biryani</SelectItem>
            <SelectItem value="fried-rice">Fried Rice</SelectItem>
            <SelectItem value="pickles">Pickles</SelectItem>
            <SelectItem value="shakes">Shakes</SelectItem>
            <SelectItem value="soups">Soups</SelectItem>
            <SelectItem value="salads">Salads</SelectItem>
            <SelectItem value="detox-water">Detox Water</SelectItem>
            <SelectItem value="curries">Curries</SelectItem>
            <SelectItem value="non-veg-curries">Non-Veg Curries</SelectItem>
            <SelectItem value="snacks">Snacks</SelectItem>
            <SelectItem value="juices">Juices</SelectItem>
            <SelectItem value="desserts-sweets">Desserts & Sweets</SelectItem>
            <SelectItem value="breakfast">Breakfast Dishes</SelectItem>
            <SelectItem value="street-food">Street Food</SelectItem>
            <SelectItem value="south-indian">South Indian</SelectItem>
            <SelectItem value="north-indian">North Indian</SelectItem>
            <SelectItem value="chinese">Chinese / Indo-Chinese</SelectItem>
            <SelectItem value="italian">Italian</SelectItem>
            <SelectItem value="mexican">Mexican</SelectItem>
            <SelectItem value="rice-varieties">Rice Varieties</SelectItem>
            <SelectItem value="roti-paratha">Roti & Paratha</SelectItem>
            <SelectItem value="gravy-dishes">Gravy Dishes</SelectItem>
            <SelectItem value="tandoori">Tandoori Items</SelectItem>
            <SelectItem value="stir-fry">Stir Fry</SelectItem>
            <SelectItem value="healthy-low-cal">Healthy/Low-Calorie</SelectItem>
            <SelectItem value="festive-specials">Festive Specials</SelectItem>
            <SelectItem value="one-pot-meals">One-Pot Meals</SelectItem>
            <SelectItem value="baking-cakes">Baking & Cakes</SelectItem>
            <SelectItem value="ice-creams">Ice Creams & Chilled Desserts</SelectItem>
            <SelectItem value="sandwiches-wraps">Sandwiches & Wraps</SelectItem>
            <SelectItem value="dips-chutneys">Dips & Chutneys</SelectItem>
            <SelectItem value="beverages-mocktails">Beverages & Mocktails</SelectItem>
            <SelectItem value="kids-special">Kids Special</SelectItem>
            <SelectItem value="party-starters">Party Starters</SelectItem>
            <SelectItem value="quick-easy">Quick & Easy</SelectItem>
            <SelectItem value="lunch-box">Lunch Box Ideas</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Prep Time and Servings */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="prepTime">Prep Time</Label>
          <Input
            id="prepTime"
            type="text"
            value={formData.prepTime}
            onChange={(e) => handleInputChange('prepTime', e.target.value)}
            placeholder="e.g., 30 minutes"
          />
        </div>
        <div>
          <Label htmlFor="servings">Servings</Label>
          <Input
            id="servings"
            type="text"
            value={formData.servings}
            onChange={(e) => handleInputChange('servings', e.target.value)}
            placeholder="e.g., 4 people"
          />
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <Label htmlFor="image">Recipe Image</Label>
        <div className="mt-2">
          <label htmlFor="imageInput" className="cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              {formData.image ? (
                <div className="space-y-2">
                  <img
                    src={formData.image}
                    alt="Recipe preview"
                    className="max-h-32 mx-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-600">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">Click to upload an image</p>
                </div>
              )}
            </div>
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Ingredients */}
      <div>
        <Label>Ingredients *</Label>
        <div className="space-y-2 mt-2">
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={ingredient}
                onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayItem('ingredients', index)}
                disabled={formData.ingredients.length === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addArrayItem('ingredients')}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Ingredient
          </Button>
        </div>
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps */}
      <div>
        <Label>Preparation Steps *</Label>
        <div className="space-y-2 mt-2">
          {formData.steps.map((step, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex-1">
                <Textarea
                  value={step}
                  onChange={(e) => handleArrayChange('steps', index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  rows={2}
                />
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayItem('steps', index)}
                disabled={formData.steps.length === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addArrayItem('steps')}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Step
          </Button>
        </div>
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
          Save Changes
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
