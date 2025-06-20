
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Recipe } from '@/types/Recipe';
import { useRecipeForm } from '@/hooks/useRecipeForm';
import ImageUploadField from '@/components/form/ImageUploadField';
import ArrayField from '@/components/form/ArrayField';
import CategorySelect from '@/components/form/CategorySelect';

interface AddRecipeFormProps {
  onSubmit: (recipe: Omit<Recipe, 'id'>) => void;
}

const AddRecipeForm: React.FC<AddRecipeFormProps> = ({ onSubmit }) => {
  const {
    formData,
    errors,
    handleInputChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    handleImageUpload,
    validateForm,
    resetForm,
    getCleanedFormData,
  } = useRecipeForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const recipe = getCleanedFormData();
    onSubmit(recipe);
    resetForm();
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
      <CategorySelect
        value={formData.category}
        onValueChange={(value: Recipe['category']) => handleInputChange('category', value)}
      />

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
      <ImageUploadField
        image={formData.image}
        onImageUpload={handleImageUpload}
      />

      {/* Ingredients */}
      <ArrayField
        label="Ingredients"
        items={formData.ingredients}
        onItemChange={(index, value) => handleArrayChange('ingredients', index, value)}
        onAddItem={() => addArrayItem('ingredients')}
        onRemoveItem={(index) => removeArrayItem('ingredients', index)}
        placeholder="Ingredient"
        error={errors.ingredients}
      />

      {/* Preparation Steps */}
      <ArrayField
        label="Preparation Steps"
        items={formData.steps}
        onItemChange={(index, value) => handleArrayChange('steps', index, value)}
        onAddItem={() => addArrayItem('steps')}
        onRemoveItem={(index) => removeArrayItem('steps', index)}
        placeholder="Step"
        useTextarea={true}
        error={errors.steps}
      />

      {/* Submit Button */}
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        Add Recipe
      </Button>
    </form>
  );
};

export default AddRecipeForm;
