import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/ProfileNavBar.css";
import userImage from "./../FontAwsomeIcon/pngegg.png"
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const ProfileNavBar = () => {
    // const user ={name:"Rushi",email:"Koterushi242@gmail.com"}
    const {user} = useContext(UserContext);
  return (
    <>
      <div className="ProfileNavBar">
        <div className="userImage">
            <img src={userImage} alt="Profile-Logo" className="ProfilePicture"/>
            <h4>{user.UserName}</h4>
            {/* <p>{user.email}</p> */}
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link" to={"/user/profile"}>
                Personal Info
              </Link>
            </li>
            <li>
              {/* <Link className="link" to={"/user/orders"}>
                My Orders
              </Link> */}
            </li>
            <li>
              <Link className="link" to={"/user/giftcard"}>
                Gift Cards
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProfileNavBar;