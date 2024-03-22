import React, { useContext, useState } from "react";
import { AuthContext } from "../Components/User/Auth/AuthContext.js";
import Followers from "../Components/User/Profile/Followers.js";
import Following from "../Components/User/Profile/Following.js";
import { Link } from 'react-router-dom';
import ProfileIcon from "../Components/User/Profile/ProfileIcon.js";
import ProfileForm from "../Components/User/Profile/ProfileForm.js";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Button from "../Components/Form/Buttons/Button.js";
import PacmanLoader from "react-spinners/PacmanLoader";

const ProfilePageDiv = styled.div`
  background: #1c1c1c;
  width: 100%;
  min-height: 600px;
  color: #fff;
  padding: 20px;
  margin: auto;
  font-size: 0.8em;
  font-family: Roboto, sans-serif;
  color: #fff;
  margin-bottom: 50px;
  margin-top: 20px;
  border-radius: 15px;
`;

const ProfileTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const FollowCount = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-left: 25%;
  margin-top: 25px;
  @media (max-width: 770px) {
    width: 80%;
    margin-left:10%;
  }
`;

const FollowingDiv = styled.div`
  width: 50%;
  text-align: center;
`;

const FollowersDiv = styled.div`
  width: 50%;
  text-align: center;
`;

function Profile() {
  const { user } = useContext(AuthContext); // Access user information from AuthContext
  const [isProfilePageDisplayed, setIsProfilePageDisplayed] = useState(false);
  const username = user.username;

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "10px"
  };

  const handleEditProfileClick = () => {
    setIsProfilePageDisplayed(!isProfilePageDisplayed);
  };

  if (!user) {
    return ( 
    <div className={css`
      height:100vh;
      width:100vw;
    `}>
      <PacmanLoader
        loading={!user}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#F44034"
        cssOverride={override}
      />
    </div>
    );
  }

  return (
    <div
      className={css`
        margin-top: 20px;
        width: 90%;
        margin-left: 5%;
      `}
    >
      <Button handleClick={handleEditProfileClick} text="Edit Profile" />
      {isProfilePageDisplayed && <ProfileForm />}

      <ProfilePageDiv>
        <span>
          <Link 
            to={`/user/${username}`}
            className={css`
              margin-top:10px;
              color:#fff;
              font-size: 0.8em;
              font-family: Roboto, sans-serif;
              font-weight:900;
              margin-left:5px;
              &:hover{
                pointer:cursor;
              }
            `}
          >
              PROFILE PAGE &gt;
          </Link>
        </span>

        <ProfileTitle>{username}</ProfileTitle>
        <h2 className="profilePic">
          <ProfileIcon username={username} auto="auto"/>
        </h2>
        <ProfileInfo>
          <h3 className="profile_h3">
            
          </h3>
        </ProfileInfo>

        <FollowCount>
          <FollowingDiv>
            <Following/>
          </FollowingDiv>
          <FollowersDiv>
            <Followers/>
          </FollowersDiv>
        </FollowCount>
      </ProfilePageDiv>
    </div>
  );
}

export default Profile;