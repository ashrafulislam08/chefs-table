import React from "react";

const Sidebar = ({
  recipeQueue,
  preparedRecipe,
  handleRemove,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      {/* Want to cook table */}

      <div className="overflow-x-auto">
        <h2 className="font-bold text-center text-2xl py-2 border-b-2">
          Want to cook: {recipeQueue.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minute.</td>
                <td>{recipe.calories} Calories</td>
                <td>
                  <button
                    onClick={() => handleRemove(recipe.recipe_id)}
                    className="btn bg-green-400 text-gray-800 rounded-3xl"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h2 className="font-bold text-center text-2xl py-2 border-b-2">
          Currently cooking : {preparedRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minute.</td>
                <td>{recipe.calories} Calories</td>
              </tr>
            ))}

            <tr className="border-none">
              <td></td>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* currently cooking table */}
    </div>
  );
};

export default Sidebar;
