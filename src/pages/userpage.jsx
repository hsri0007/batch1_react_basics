import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../common/card';

const UserPage = () => {
    const [state,setState] =useState({})
    const params =useParams();

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then((response) => response.json())
    .then((data) => setState(data));
},[])

  return (
    <div>
        <Card name={state?.name} email={state?.email} phone={state?.phone}  />
    </div>
  )
}

export default UserPage