import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    
  return (
    <div className='card_styles' >
        <h6>{props?.name}</h6>
        <h6>{props?.email}</h6>
        <h6>{props?.phone}</h6>
        {
props?.id && <Link to={`/user/${props.id}`} >click</Link>
        }
        
    </div>
  )
}

export default Card