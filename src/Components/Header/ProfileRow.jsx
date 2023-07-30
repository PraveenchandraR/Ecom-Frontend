import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../Styles/ProfileRow.css";
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import UserContext from "../Context/UserContext";


const ProfileRow = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickProfile = ()=>{
    if(user.status){
      navigate('/user');
    }else{
      navigate("/SignIn");
    }
  }

  const handleClickCart = () =>{
    navigate("/cart")
  }

  return (
    <>
      <div className="ProfileBar">
        <button className="button" onClick={handleClickProfile}><FontAwesomeIcon icon="user" /> My Profile </button>
        <button className="button" onClick={handleClickCart}><FontAwesomeIcon icon="shopping-cart" /> My Cart </button>
      </div>
    </>
  );
};

export default ProfileRow;