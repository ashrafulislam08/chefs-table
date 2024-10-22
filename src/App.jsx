import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { OurRecipe } from "./components/OurRecipe/OurRecipe";
import { Recipes } from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This recipe already exist!");
    }
  };

  const handleRemove = (id) => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );

    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  console.log(recipeQueue);
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Our Recipe */}
      <OurRecipe />

      {/* Recipe Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Card Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue} />
        {/* Side Bar */}
        <Sidebar
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          recipeQueue={recipeQueue}
        />
      </section>
    </div>
  );
}

export default App;
