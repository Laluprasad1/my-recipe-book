
export const validateRecipeForm = (formData: {
  name: string;
  ingredients: string[];
  steps: string[];
}) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'Recipe name is required';
  }

  const validIngredients = formData.ingredients.filter(ing => ing.trim());
  if (validIngredients.length === 0) {
    errors.ingredients = 'At least one ingredient is required';
  }

  const validSteps = formData.steps.filter(step => step.trim());
  if (validSteps.length === 0) {
    errors.steps = 'At least one preparation step is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
