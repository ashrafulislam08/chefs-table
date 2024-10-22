import { useEffect, useState } from "react";
import Card from "../Card/Card";

export const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Card
            key={recipe.recipe_id}
            addRecipeToQueue={addRecipeToQueue}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};
