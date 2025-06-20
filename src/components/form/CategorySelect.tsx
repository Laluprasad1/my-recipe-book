
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Recipe } from '@/types/Recipe';

interface CategorySelectProps {
  value: Recipe['category'];
  onValueChange: (value: Recipe['category']) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onValueChange }) => {
  return (
    <div>
      <Label htmlFor="category">Category *</Label>
      <Select value={value} onValueChange={onValueChange}>
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
  );
};

export default CategorySelect;
