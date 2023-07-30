import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{useContext} from 'react';
import "./../Styles/PersonalInfo.css";
import UserContext from '../Context/UserContext';


const PersonalInfo = () => {

    const {user} = useContext(UserContext);
    console.log(user,"personal data")

  return (
    <div className='PersonalInfoContainer'>
      <h3>Personal Information </h3>
      <p className='ParaInfoUpadte'>
        Manage your personal information, including phone Numbers and where can
        you be contacted
      </p>
      <div className="infoFlexContainer">
        <div className="infoFlexItem">
          <div>
            <h4>Name</h4>
            <p>{user.UserName}</p>
          </div>
          <FontAwesomeIcon icon="user" />
        </div>
        {/* <div className="infoFlexItem">
          <div>
            <h4>Phone Number</h4>
            <p>{user.Name}</p>
          </div>
          <FontAwesomeIcon icon="phone" />
        </div> */}
        <div className="infoFlexItem">
          <div>
            <h4>Address</h4>
            <p>MIG-23 Anand Vihar</p>
          </div>
          {/* <FontAwesomeIcon icon="phone" /> */}
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        </div>
        {/* <div className="infoFlexItem"> */}
          {/* <div>
            <h4>Email</h4>
            <p>{user.Email}</p>
          </div> */}
          {/* <FontAwesomeIcon icon="envelope" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default PersonalInfo