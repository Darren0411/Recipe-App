import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info,setinfo] = useState("");

     const mealDetails = async()=>{
       const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
       const jsonData = await get.json();
       setinfo(jsonData.meals[0]);
     }
     
     useEffect(() => {
      if(mealid && mealid !=""){
        mealDetails();
      }
      }, [mealid])


  return (
    <div className='mealInfo'>
     <img src={info.strMealThumb}/>
     <div className='Info'>
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Instruction's</h3>
        <p>{info.strInstructions}</p>
        <h3>Youtube Link</h3>
       <a className="link" href={`${info.strYoutube}`}>{info.strYoutube}</a>
     </div>
    </div>
  )
}

export default Mealinfo
