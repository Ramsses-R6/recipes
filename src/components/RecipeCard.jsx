import React from 'react';
import './RecipeCard.css';

function RecipeCard ({ recipe: { title, diets } }) {
  return (
    <div className='recipe-card'>
      <div className='recipe-card__title'>{title}</div>
      <div className='recipe-card__diets'>
        {(diets && diets.map((diet, index) => <p key={index} className='recipe-card__diet'>{diet}</p>))}
      </div>
    </div>
  )
}

export default RecipeCard;