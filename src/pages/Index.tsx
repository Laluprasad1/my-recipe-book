
import React, { useState, useEffect } from 'react';
import { Search, Plus, Book, ChefHat, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import AddRecipeForm from '@/components/AddRecipeForm';
import EditRecipeForm from '@/components/EditRecipeForm';
import RecipeCard from '@/components/RecipeCard';
import RecipeDetailModal from '@/components/RecipeDetailModal';
import { Recipe } from '@/types/Recipe';
import { sampleRecipes } from '@/data/sampleRecipes';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 5;
  const { toast } = useToast();

  // Load recipes from localStorage on component mount
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipeBook');
    if (savedRecipes) {
      try {
        const parsedRecipes = JSON.parse(savedRecipes);
        setRecipes(parsedRecipes);
      } catch (error) {
        console.error('Error loading recipes from localStorage:', error);
        loadSampleRecipes();
      }
    } else {
      loadSampleRecipes();
    }
  }, []);

  const loadSampleRecipes = () => {
    const recipesWithIds: Recipe[] = sampleRecipes.map((recipe, index) => ({
      ...recipe,
      id: (Date.now() + index).toString(),
    }));
    setRecipes(recipesWithIds);
  };

  // Save recipes to localStorage whenever recipes change
  useEffect(() => {
    localStorage.setItem('recipeBook', JSON.stringify(recipes));
  }, [recipes]);

  // Add new recipe
  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: Date.now().toString(),
    };
    setRecipes(prev => [...prev, newRecipe]);
    setIsAddDialogOpen(false);
    toast({
      title: "Recipe Added",
      description: `${recipe.name} has been added to your recipe book.`,
    });
  };

  // Edit recipe
  const editRecipe = (updatedRecipe: Omit<Recipe, 'id'>) => {
    if (editingRecipe) {
      const updated: Recipe = {
        ...updatedRecipe,
        id: editingRecipe.id,
      };
      setRecipes(prev => prev.map(recipe => 
        recipe.id === editingRecipe.id ? updated : recipe
      ));
      setIsEditDialogOpen(false);
      setEditingRecipe(null);
      toast({
        title: "Recipe Updated",
        description: `${updatedRecipe.name} has been updated successfully.`,
      });
    }
  };

  // Delete recipe
  const deleteRecipe = (recipeId: string) => {
    const recipeToDelete = recipes.find(r => r.id === recipeId);
    setRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    toast({
      title: "Recipe Deleted",
      description: `${recipeToDelete?.name} has been removed from your recipe book.`,
      variant: "destructive",
    });
  };

  // Filter recipes based on search term and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const categories = [
    { id: 'all', label: 'All Recipes', count: recipes.length },
    { id: 'biryani', label: 'Biryani', count: recipes.filter(r => r.category === 'biryani').length },
    { id: 'fried-rice', label: 'Fried Rice', count: recipes.filter(r => r.category === 'fried-rice').length },
    { id: 'pickles', label: 'Pickles', count: recipes.filter(r => r.category === 'pickles').length },
    { id: 'shakes', label: 'Shakes', count: recipes.filter(r => r.category === 'shakes').length },
    { id: 'soups', label: 'Soups', count: recipes.filter(r => r.category === 'soups').length },
    { id: 'salads', label: 'Salads', count: recipes.filter(r => r.category === 'salads').length },
    { id: 'detox-water', label: 'Detox Water', count: recipes.filter(r => r.category === 'detox-water').length },
    { id: 'curries', label: 'Curries', count: recipes.filter(r => r.category === 'curries').length },
    { id: 'non-veg-curries', label: 'Non-Veg Curries', count: recipes.filter(r => r.category === 'non-veg-curries').length },
    { id: 'snacks', label: 'Snacks', count: recipes.filter(r => r.category === 'snacks').length },
    { id: 'juices', label: 'Juices', count: recipes.filter(r => r.category === 'juices').length },
    { id: 'desserts-sweets', label: 'Desserts & Sweets', count: recipes.filter(r => r.category === 'desserts-sweets').length },
    { id: 'breakfast', label: 'Breakfast', count: recipes.filter(r => r.category === 'breakfast').length },
    { id: 'street-food', label: 'Street Food', count: recipes.filter(r => r.category === 'street-food').length },
    { id: 'south-indian', label: 'South Indian', count: recipes.filter(r => r.category === 'south-indian').length },
    { id: 'north-indian', label: 'North Indian', count: recipes.filter(r => r.category === 'north-indian').length },
    { id: 'chinese', label: 'Chinese', count: recipes.filter(r => r.category === 'chinese').length },
    { id: 'italian', label: 'Italian', count: recipes.filter(r => r.category === 'italian').length },
    { id: 'mexican', label: 'Mexican', count: recipes.filter(r => r.category === 'mexican').length },
    { id: 'rice-varieties', label: 'Rice Varieties', count: recipes.filter(r => r.category === 'rice-varieties').length },
    { id: 'roti-paratha', label: 'Roti & Paratha', count: recipes.filter(r => r.category === 'roti-paratha').length },
    { id: 'gravy-dishes', label: 'Gravy Dishes', count: recipes.filter(r => r.category === 'gravy-dishes').length },
    { id: 'tandoori', label: 'Tandoori', count: recipes.filter(r => r.category === 'tandoori').length },
    { id: 'stir-fry', label: 'Stir Fry', count: recipes.filter(r => r.category === 'stir-fry').length },
    { id: 'healthy-low-cal', label: 'Healthy/Low-Cal', count: recipes.filter(r => r.category === 'healthy-low-cal').length },
    { id: 'festive-specials', label: 'Festive Specials', count: recipes.filter(r => r.category === 'festive-specials').length },
    { id: 'one-pot-meals', label: 'One-Pot Meals', count: recipes.filter(r => r.category === 'one-pot-meals').length },
    { id: 'baking-cakes', label: 'Baking & Cakes', count: recipes.filter(r => r.category === 'baking-cakes').length },
    { id: 'ice-creams', label: 'Ice Creams', count: recipes.filter(r => r.category === 'ice-creams').length },
    { id: 'sandwiches-wraps', label: 'Sandwiches & Wraps', count: recipes.filter(r => r.category === 'sandwiches-wraps').length },
    { id: 'dips-chutneys', label: 'Dips & Chutneys', count: recipes.filter(r => r.category === 'dips-chutneys').length },
    { id: 'beverages-mocktails', label: 'Beverages & Mocktails', count: recipes.filter(r => r.category === 'beverages-mocktails').length },
    { id: 'kids-special', label: 'Kids Special', count: recipes.filter(r => r.category === 'kids-special').length },
    { id: 'party-starters', label: 'Party Starters', count: recipes.filter(r => r.category === 'party-starters').length },
    { id: 'quick-easy', label: 'Quick & Easy', count: recipes.filter(r => r.category === 'quick-easy').length },
    { id: 'lunch-box', label: 'Lunch Box', count: recipes.filter(r => r.category === 'lunch-box').length },
    { id: 'other', label: 'Other', count: recipes.filter(r => r.category === 'other').length },
  ];

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (e: React.MouseEvent, recipeId: string) => {
    e.stopPropagation();
    deleteRecipe(recipeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Recipe Book</h1>
                <p className="text-sm text-gray-600">Discover and save your favorite recipes</p>
              </div>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Recipe
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Recipe</DialogTitle>
                </DialogHeader>
                <AddRecipeForm onSubmit={addRecipe} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Horizontal Scrollable Category Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-orange-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'border-orange-200 text-gray-700 hover:bg-orange-50'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label} ({category.count})
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
            {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
            {filteredRecipes.length > recipesPerPage && (
              <span className="ml-2">
                (Page {currentPage} of {totalPages})
              </span>
            )}
          </p>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-orange-100 max-w-md mx-auto">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {recipes.length === 0 ? 'No recipes yet' : 'No recipes found'}
              </h3>
              <p className="text-gray-600 mb-4">
                {recipes.length === 0 
                  ? 'Start building your recipe collection by adding your first recipe!'
                  : 'Try adjusting your search terms or category to find what you\'re looking for.'
                }
              </p>
              {recipes.length === 0 && (
                <Button 
                  onClick={() => setIsAddDialogOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Recipe
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
              {currentRecipes.map((recipe) => (
                <div key={recipe.id} className="relative group">
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => handleEdit(recipe)}
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={(e) => handleDelete(e, recipe.id)}
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-red-50 hover:border-red-200 text-red-600 h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNumber)}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* Edit Recipe Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Recipe</DialogTitle>
          </DialogHeader>
          {editingRecipe && (
            <EditRecipeForm 
              recipe={editingRecipe}
              onSubmit={editRecipe}
              onCancel={() => {
                setIsEditDialogOpen(false);
                setEditingRecipe(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
