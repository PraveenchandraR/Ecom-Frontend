import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../Auth/SignUp";
import Details from "../Compo/Details";
import Login from "../Auth/Login";
import Fashion from '../pages/Fashion';
import Jewelery from '../pages/Jewelery';
import Electronic from '../pages/Electronic';
import Profile from '../UserProfile/Profile';
import Order from '../UserProfile/Order';
import ShowCart from '../Cart/ShowCart';
import PersonalInfo from '../UserProfile/PersonalInfo';
import Store from '../pages/Store';
import Payment from "../pages/Payment";

const RouteLinks = () => {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home /> } />
              <Route path="/signup" element={<SignUp />} />
                <Route path="/products/:category/:id" element={<Details />} />
                  <Route path="/SignIn" element={<Login />} />
                   <Route path='/fashion' element={<Fashion/>}/>
            <Route path='/jewelery' element={<Jewelery/>}/>
            <Route path='/electronics' element={<Electronic/>}/>
            <Route path='/user' element={<Profile/>}>
              <Route path='profile' element={<PersonalInfo/>}/>
              <Route path='orders' element={<Order/>}/>
              <Route path='giftcard' element={<Order/>}/>
            </Route>
            <Route path='/cart' element={<ShowCart/>}/>
          <Route path='/store' element={<Store />}></Route>
          <Route path="/payment" element={<Payment />} />

                       </Routes>    

        </div>
    )
}
export default RouteLinks;