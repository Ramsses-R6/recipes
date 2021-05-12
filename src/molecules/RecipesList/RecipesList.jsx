import React from 'react';
import RecipeCard from '../RecipeCard';
import {
  Link
} from 'react-router-dom';

import './RecipesList.css'


function RecipesList ({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes && recipes.map((recipe, index) => (
        <Link
          className='recipe-list__item'
          key={index}
          to={{
            pathname: "/recipe",
            state: { recipe: recipe }
          }}
          style={{ textDecoration: 'none' }}
        >
        <RecipeCard recipe={recipe} />
      </Link>
      ))}
    </div>
  )
}

export default RecipesList;