import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
  if (detail === undefined) {
    return null; 
  }

  if (detail === null) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',  
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Data not found
      </div>
    );
  }
  return (
    <div className='meals'>
      {detail.map((curItem) => (
        <div className='mealImg' key={curItem.idMeal}>
          <img src={curItem.strMealThumb} alt={curItem.strMeal} />
          <p>{curItem.strMeal}</p>
          <NavLink to={`/${curItem.idMeal}`}>
            <button>Recipe</button>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Mealcards
