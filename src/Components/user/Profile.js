import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import Followers from "./ProfileFeatures/Followers.js";
import Following from "./ProfileFeatures/Following.js";
import FollowingList from "./ProfileFeatures/FollowingList.js";
import jwt from 'jsonwebtoken'
import ProfileIcon from "./ProfileFeatures/ProfileIcon";

function Profile() {
  //used to grab user information
  const user = useSelector(selectUser);
  const username = user.name;

  useEffect(() => {
    //grabs user local  token
    const token = localStorage.getItem('token')
    if (token){
      //if token matches decode jwt token
      const user = jwt.decode(token)
      if(!user){
        //if its not the correct user remove jwt token
        localStorage.removeItem('token')
      }else{
        console.log("welcome")
      }
    }
  }, [])
  return (
    <div>
        <div className='profile_page'>
          <h1 className='profile_title'>{username}</h1>
          <h2 className="profilePic"><ProfileIcon/></h2>
          <div className='profile_info'>
            <h2 className='profile_h2'>{user.first}{user.last}</h2>
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