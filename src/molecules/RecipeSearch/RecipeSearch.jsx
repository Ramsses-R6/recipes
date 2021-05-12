import React, { useState } from 'react';
import {
  isBrowser
} from "react-device-detect";
import './RecipeSearch.css';

function RecipesSearch ({ onSearch, currentQuery }) {

  const [query, querySet] = useState('')

  const onHandleKey = ({ key }) => {
    if (key === 'Enter') onSearch(query);
  }

  const onHandleClick = () => onSearch(query);

  const onHandleChange = ({ target: { value } }) => querySet(value);

  return (
    <div className='recipe-search'>
      <input
        type="text"
        className='recipe-search__input'
        defaultValue={currentQuery}
        onKeyDown={onHandleKey}
        onChange={onHandleChange}
      />
      {!isBrowser && <button onClick={onHandleClick}>Search</button>}
    </div>
  )
}

export default RecipesSearch;
