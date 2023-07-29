import React, { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext.js";
import Followers from "./Followers.js";
import Following from "./Following.js";
import FollowingList from "./FollowingList.js";
import ProfileIcon from "./ProfileIcon";
import ProfilePage from "./ProfilePage";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Button from "../../Form/Buttons/Button";


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

  const handleEditProfileClick = () => {
    setIsProfilePageDisplayed(!isProfilePageDisplayed);
  };

  return (
    <div
      className={css`
        margin-top: 20px;
        width: 90%;
        margin-left: 5%;
      `}
    >
      <Button handleClick={handleEditProfileClick} text="Edit Profile" />
      {isProfilePageDisplayed && <ProfilePage />}

      <ProfilePageDiv>
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