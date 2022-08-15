import React, { useEffect, useState, useHistory } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/userSlice";
import Followers from "./Followers.js";
import Following from "./Following.js";
import FollowingList from "./FollowingList.js";
import jwt from 'jsonwebtoken'

function Profile() {
  // const user = useSelector(selectUser);
  // const username = user.name;

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
      }else{
        alert("welcome")
      }
    }
  }, [])
  return (
    <div>
        <div className='profile_page'>
          <h1 className='profile_title'>Profile</h1>
          {/* <img src={user.profileImg} height="150px" width="150px" className='profile_img'/>
          <div className='profile_info'>
            <h2 className='profile_h2'>{user.firstname} {user.lastname}</h2>
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
          <FollowingList username={username}/> */}
        </div>
    </div>
  )
}

export default Profile