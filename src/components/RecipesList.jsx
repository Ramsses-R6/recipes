import React from 'react';
import RecipeCard from './RecipeCard';

function RecipesList ({ recipes }) {
  return (
    <div>
      {recipes && recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)}
    </div>
  )
}

export default RecipesList;