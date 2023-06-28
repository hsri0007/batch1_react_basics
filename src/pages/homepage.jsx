import React, { useEffect, useState } from 'react'
import Card from '../common/card';
import "./homepage.css"

const Homepage = () => {
    const [state,setState]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setState(data));
    },[])
    
  return (
    <div className='container' >
        {
        state.map((obj)=><Card name={obj.name} email={obj.email} phone={obj.phone} id={obj.id} />)
        }
    </div>
  )
}

export default Homepage