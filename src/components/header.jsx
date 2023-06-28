import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header__main" >
         <Link to="/" >home page</Link>
         <Link to="/contact-us" >contact page</Link>
      </div>
  )
}

export default Header