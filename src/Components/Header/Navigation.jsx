import React from 'react';
import { Link } from 'react-router-dom';
import "./../Styles/Navigation.css";

const Navigation = () => {
  return (
    <div className='NavBar'>
        <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/store" >Store</Link>
        <Link className='link' to="/fashion" >Fashion</Link>
        <Link className='link' to="/jewelery" >Jewelery</Link>
        <Link className='link' to="/electronics" >Electronics</Link>
    </div>
  )
}

export default Navigation