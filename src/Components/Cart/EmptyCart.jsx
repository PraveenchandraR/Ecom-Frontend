import React from 'react';
import EmptyCartImg from "./../../Images/empty-cart-3385483.png";
import "./../Styles/EmptyCart.css";
import { useNavigate } from 'react-router-dom';


const EmptyCart = () => {
  const navigate = useNavigate();
  const handleClickLogin = ()=>{
    navigate('/SignIn');
  }

  return (
    <div className='Container'>
        <img className='cartImage' src={EmptyCartImg} alt="Empty-Cart" />
        <p className='info'>Missing Cart items?</p>
        <p className='subPara'>Login to see the items you added previously</p>
        <button className='cartLoginBtn' onClick={handleClickLogin}>Login</button>
    </div>
  )
}

export default EmptyCart