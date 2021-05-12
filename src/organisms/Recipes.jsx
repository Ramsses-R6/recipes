import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useLocation,
  useHistory
} from "react-router-dom";
import RecipesList from '../molecules/RecipesList';
import RecipesSearch from '../molecules/RecipeSearch';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Recipes () {
  const searchQuery = (new URLSearchParams(useLocation().search)).get('query');
  const history = useHistory();

  const [recipes, recipesSet] = useState(null);
  const [query, querySet] = useState(searchQuery || '');

  const getRecipes = async () => {
    const { data: { results }} = await axios.get(
      `${API_URL}?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true`
    ).catch( err => { recipesSet([]) })

    recipesSet(results);
    querySet('');
  }

  useEffect(() => {
    if (!recipes || query.length) getRecipes();
  }, [recipes, query, searchQuery])

  const onSearch = query => {
    if (!query) getRecipes();
    querySet(query);
    history.push({
      pathname: '/',
      search: `?query=${query}`
    })
  }

  return (
    <div>
      <RecipesSearch onSearch={onSearch} currentQuery={query} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default Recipes;