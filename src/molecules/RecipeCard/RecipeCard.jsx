import React from 'react';
import './RecipeCard.css';

function RecipeCard ({ recipe: { title, vegan, image } }) {

  const imageBackgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='recipe-card' style={imageBackgroundStyle}>
      <div className='recipe-card__title'>{title}</div>
      {vegan && (
        <div className='recipe-card__diets'>
          vegan
        </div>
      )}
    </div>
  )
}

export default RecipeCard;