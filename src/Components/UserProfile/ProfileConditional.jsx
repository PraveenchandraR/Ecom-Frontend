import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import "./../Styles/profile.css"
import ProfileNavBar from './ProfileNavBar'; 
import { Outlet, useNavigate } from 'react-router-dom';


const ProfileConditional = () => {

    const {user,SetUser} = useContext(UserContext);
    const navigate = useNavigate()

    const onClickSignOut = () =>{
      SetUser({status:false});
      localStorage.removeItem("Token");
      navigate('/SignIn');
    }

  return (
    <div>
        <div className="headerBar">
        <div className='headerBarChild'><h4 style={{display:'inline-block'}}>{user.UserName}</h4>'s Dashbord</div>
            <div className='headerBarChild'>
                <button className='signoutbtn' onClick={onClickSignOut}>signout</button>
            </div>
        </div>
        <hr className='hr'/>
        <ProfileNavBar/>
        <Outlet/>
  </div>
  )
}

export default ProfileConditional