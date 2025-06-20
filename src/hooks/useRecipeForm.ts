
import { useState } from 'react';
import { Recipe } from '@/types/Recipe';
import { validateRecipeForm } from '@/utils/recipeFormValidation';

interface FormData {
  name: string;
  ingredients: string[];
  steps: string[];
  prepTime: string;
  servings: string;
  image: string;
  category: Recipe['category'];
}

const initialFormData: FormData = {
  name: '',
  ingredients: [''],
  steps: [''],
  prepTime: '',
  servings: '',
  image: '',
  category: 'other',
};

export const useRecipeForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
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
    const { errors: newErrors, isValid } = validateRecipeForm(formData);
    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const getCleanedFormData = (): Omit<Recipe, 'id'> => ({
    name: formData.name.trim(),
    ingredients: formData.ingredients.filter(ing => ing.trim()),
    steps: formData.steps.filter(step => step.trim()),
    prepTime: formData.prepTime.trim() || undefined,
    servings: formData.servings.trim() || undefined,
    image: formData.image || undefined,
    category: formData.category,
  });

  return {
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
  };
};
