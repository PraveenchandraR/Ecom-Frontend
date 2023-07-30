import React from 'react'
import ProfileRow from './ProfileRow';
import LogoRow from './LogoRow';
import Navigation from './Navigation';
import RouteLinks from './RouteLinks';
import UserContext from '../Context/UserContext';
import { useState } from 'react';
import Footer from './Footer';
// import { useLocation } from "react-router-dom";


const Header = () => {
  // const location = useLocation();
  // const isAuthPage = location.pathname === '/signUp' || location.pathname === '/logIn';
  const [user,SetUser] = useState({
    status:false,
    UserID:null,
    UserName:null,
    UserPhone:null, 
    UserAdd:null, 
    UserEmail:null, 
  });

  return (
    <div>
      <UserContext.Provider value={{user,SetUser}}>
        <ProfileRow/>
        <LogoRow/>
        <Navigation/>
        <RouteLinks/>
      </UserContext.Provider>
        <Footer/>
    </div>
  )
}

export default Header;