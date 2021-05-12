import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipesList from '../components/RecipesList';

function Recipes () {

  const [recipes, recipesSet] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      const { data: { results }} = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=f25c41b6441745159634c8d95ad643ba&query=&addRecipeInformation=true')
      .catch( err => { recipesSet([]) })

      recipesSet(results)
    }
    if (!recipes) getRecipes();
  }, [recipes])

  return (
    <div>
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default Recipes;