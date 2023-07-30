import React,{useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Emoji from './../../Images/emoji-hand.png';
import axios from 'axios';
import "./../Styles/Login.css";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';



const Login = () => {

  const navigate = useNavigate();
  const {user,SetUser} = useContext(UserContext);
  const check = useRef(false);
  const [UserDetails,setUserDetails] = useState({
    Email:"",
    Pass :""
  });

  useEffect(()=>{
    if(!check.current){
      toast.info('Please Login to see the cart items you added previously', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    check.current = true;

    // const token = localStorage.getItem("Token");

    // const Data = {
    //   headers: {
    //     'Authorization': token
    //   }
    // }
    // axios.post("http://localhost:3001/auth/verify",Data).then((res)=>{

    //   console.log("res.data",res.status);
    //   if(res.status===200){
    //     SetUser(res.data)
    //     navigate('/user/profile');
    //   }
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const handleChange = (event)=>{
    setUserDetails({...UserDetails,[event.target.name]:event.target.value});
  }

  const handleClick = ()=>{
    console.log(UserDetails);
    // const token = localStorage.getItem("Token");
    // const Data = {
    //   headers: {
    //     'Authorization': token
    //   }
    // }
    axios.post("https://backend-ecom-server.onrender.com/auth/signIn",UserDetails
    ).then((response)=>{
        console.log(response);
        toast.success('🦄 Login successful');
        console.log("response.data.UserID=>",response.data.UserID);
        SetUser({
          status:true,
          UserID:response.data.UserID,
          UserName:response.data.UserName
        })
        console.log("user",user);
        localStorage.setItem("Token",JSON.stringify(response.data.token));
        navigate('/user/profile');
  }).catch((error)=>{
      console.log(error);
      toast.error(error.response.data.message);
  });
  }

  const callSingUp =()=>{
    navigate('/SignUp');
  }

  return (
   <>
     <div className='SignInContainer'>
        <div className="flexItem">
            <h3>WellCome !<img src={`${Emoji}`} height={20} alt=' '/></h3>
            <div className='form'>
              <label htmlFor="Email"> <FontAwesomeIcon icon="envelope" /> Email</label><br />
              <input type="email" name='Email' id='Email' value={UserDetails.Email} onChange={handleChange}/> <br />
              <label htmlFor="Pass"> <FontAwesomeIcon icon="lock" /> Password</label><br />
              <input type="password" name='Pass' id='Pass' value={UserDetails.Pass} onChange={handleChange}/> <br />
              <input type="submit" value="SignIn" id='submit' onClick={handleClick}/>
              <div className='clickSignUp'>
                <p>Don't have an account </p>
                <button onClick={callSingUp}><span>Sign Up</span></button>
              </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                closeOnClick
                rtl={false}
                theme="light"
            />
        </div>
    </div>
   </>
  )
}

export default Login;