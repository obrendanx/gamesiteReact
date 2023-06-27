import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import Followers from "./Followers.js";
import Following from "./Following.js";
import FollowingList from "./FollowingList.js";
import jwt from 'jsonwebtoken'
import ProfileIcon from "./ProfileIcon";
import ProfilePage from "./ProfilePage";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Button from '../../Form/Buttons/Button'

function Profile() {
  const [isProfilePageDisplayed, setIsProfilePageDisplayed] = useState(false);
  //grabs user from redux store
  const user = useSelector(selectUser);
  //sets the users username
  const username = user.name;

  useEffect(() => {
    const token = localStorage.getItem('token')
    //decodes token if correct user logged in
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
    //shows edit profile section when button is clicked
    setIsProfilePageDisplayed(!isProfilePageDisplayed);
  }

  const ProfilePageDiv = styled.div`
      background:#1C1C1C;
      width:100%;
      min-height:600px;
      color:#fff;
      padding:20px;
      margin:auto;
      font-size:0.8em;
      font-family:Roboto, sans-serif;
      color:#fff;
      margin-bottom:50px;
      margin-top:20px;
      border-radius:15px;
  `

  const ProfileTitle = styled.h1`
    color:#fff;
    text-transform:uppercase;
    text-align:center;
  `

  const ProfileInfo = styled.div`
    text-align:center;  
  `

  const FollowCount = styled.div`
    display:flex;
    flex-direction:row;
    width:50%;
    margin-left:25%;
    margin-top:25px;  
  `

  const FollowingDiv = styled.div`
    width:50%;
    text-align:center;  
  `

  const FollowersDiv = styled.div`
    width:50%;
    text-align:center;  
  `

  return (
    
    <div className={css`
      margin-top:20px;
      width:90%;
      margin-left:5%;
    `}>
        {/*edit profile button*/}
        {/* <Edit onClick={handleEditProfileClick}>Edit Profile</Edit> */}
        <Button handleClick={handleEditProfileClick} text='Edit Profile'></Button>
        {/* checks if profile page is displayed (from edit profile button) */}
        {isProfilePageDisplayed && <ProfilePage />}

        <ProfilePageDiv>
          <ProfileTitle>{username}</ProfileTitle>
          <h2 className="profilePic"><ProfileIcon/></h2>
          <ProfileInfo>
            <h3 className='profile_h3'>{user.location_street}, {user.location_code}, {user.location_country}</h3>
          </ProfileInfo>

          <FollowCount>
            <FollowingDiv>
              <Following />
            </FollowingDiv>
            <FollowersDiv>
              <Followers/>
            </FollowersDiv>
          </FollowCount>

          <FollowingList username={username}/>
          <FollowingList username={username}/>
          <FollowingList username={username}/> 
        </ProfilePageDiv>
    </div>
  )
}

export default Profile