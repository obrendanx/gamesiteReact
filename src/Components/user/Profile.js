import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import Followers from "./ProfileFeatures/Followers.js";
import Following from "./ProfileFeatures/Following.js";
import FollowingList from "./ProfileFeatures/FollowingList.js";
import jwt from 'jsonwebtoken'
import ProfileIcon from "./ProfileFeatures/ProfileIcon";
import ProfilePage from "./ProfilePage";

function Profile() {
  const [isProfilePageDisplayed, setIsProfilePageDisplayed] = useState(false);
  const user = useSelector(selectUser);
  const username = user.name;

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
      }else{
        console.log("welcome")
      }
    }
  }, [])

  const handleEditProfileClick = () => {
    setIsProfilePageDisplayed(!isProfilePageDisplayed);
  }

  return (
    <div>
        <button onClick={handleEditProfileClick} className="editProfile">Edit Profile</button>
        {isProfilePageDisplayed && <ProfilePage />}

        <div className='profile_page'>
          <h1 className='profile_title'>{username}</h1>
          <h2 className="profilePic"><ProfileIcon/></h2>
          <div className='profile_info'>
            <h3 className='profile_h3'>{user.location_street}, {user.location_code}, {user.location_country}</h3>
          </div>

          <div className='follow_count'>
            <div className='following'>
              <Following />
            </div>
            <div className='followers'>
              <Followers/>
            </div>
          </div>

          <FollowingList username={username}/>
          <FollowingList username={username}/>
          <FollowingList username={username}/> 
        </div>
    </div>
  )
}

export default Profile