import React, { useState } from 'react'
import Mealcards from './Mealcards';

const MainPage = () => {

  const [data,setdata] = useState();
  const [search,setsearch] = useState(null);
  const [msg,setmsg] = useState("");

  const handleSearch = (e)=>{
    setsearch(e.target.value);
  }

  const myFun = async() =>{
  if(search ==null){
   setmsg("Please Enter Something");
  }
  else{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    setdata(jsonData.meals);
    console.log(jsonData.meals);
    setmsg("");
  }
  }

  //if user presses enter keyword instead of search button
  const handleKeyDown = (e)=>{
     if(e.key=="Enter"){
      myFun();
     }
  };

  return (
  <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div>
        <div className='container'>
          <div className='searchbar'>
           <input type='text' placeholder='Enter Dish'  onKeyDown={handleKeyDown} onChange={handleSearch}></input>
           <button onClick={myFun}>Search</button>
          </div>
          <h3 className='msg'>{msg}</h3>
          <div>
          <Mealcards detail ={data}/>
          </div>
        </div>
      
    </div>
  </>
  )
}

export default MainPage
