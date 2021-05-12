import React from 'react';
import {
  useLocation,
  useHistory
} from "react-router-dom";
import RecipeCard from '../RecipeCard';

function RecipeDetail () {
  const location = useLocation();
  const history = useHistory();

  const recipe = location?.state?.recipe

  return (
    <div>
      <button onClick={() => history.goBack()}>back</button>
      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  )
}

export default RecipeDetail;