import React from "react";

const Card = ({ recipe, addRecipeToQueue }) => {
  const {
    recipe_name,
    recipe_img,
    recipe_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card bg-base-100 border-2">
      <figure className="px-8 pt-6">
        <img
          className="w-full md:h-52 rounded-xl"
          src={recipe_img}
          alt="recipe image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-gray-800 font-semibold">
          {recipe_name}
        </h2>
        <p className="text-base text-gray-600">{recipe_description}</p>
        <h3 className="text-lg text-gray-800 font-medium">
          Ingredients: {ingredients.length}
        </h3>
        <ul className="ml-8">
          {ingredients.map((ingredient, idx) => (
            <li className="list-disc text-gray-600" key={idx}>
              {ingredient}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <i className="fa-regular fa-clock mr-2 text-2xl"></i>
            <p className="font-xl">{preparing_time} minute</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
            <p className="font-xl">{calories} calorie</p>
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => addRecipeToQueue(recipe)}
            className="btn bg-green-400 rounded-full text-gray-800 px-8 text-xl mt-6 font-medium"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
