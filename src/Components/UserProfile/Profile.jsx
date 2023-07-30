import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import ProfileConditional from './ProfileConditional';
import Login from '../Auth/Login';

const Profile = () => {
    const {user} = useContext(UserContext);

  return (
    <>
      {
        user.status?  <ProfileConditional/> : <Login/>
      }

      
    </>
  )
}

export default Profile