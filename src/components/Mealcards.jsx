import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
  return (
    <div className='meals'>
        {!detail ? <h3>Data not found</h3>: detail.map((curItem)=>{
           return (
            <div className='mealImg'>
            <img src={curItem.strMealThumb}/>
            <p>
                {curItem.strMeal}
            </p>
            <NavLink to={`/${curItem.idMeal}`}> <button >Receipe</button> </NavLink>
           
            </div>      
           )
        })}
      
    </div>
  )
}

export default Mealcards
