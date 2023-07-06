import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import axios from 'axios';
import styled from '@emotion/styled';
import { AuthContext } from '../Auth/AuthContext';

const ProfileIcon = () => {
  //used to grab user information
  const { user } = useContext(AuthContext);
  const name = user.username;
  const [color, setColor] = useState("000");
  const username = user.username;

  useEffect(() => {
    async function fetchData() {
    
      const res = await axios.get(`http://localhost:5000/app/profile-icon?username=${username}`);
      setColor(res.data.color);
    }
    fetchData();
  }, [username]);

  const initials = name ? name.split(" ").map(word => word[0]).join("") : "?";

  const ProfileIcon = styled.div`
    padding:10px;
    border-radius:100%;
    width:50px;
    height:50px;
    text-align:center;
    line-height:25px;
    margin:0 auto;
    margin-top:17.5px;
    margin-bottom:17.5px;
    color:#fff;
  `

  return (
    <ProfileIcon style={{ backgroundColor: `${color}` }} className="profile-icon">
      {initials}
    </ProfileIcon>
  );
};

export default ProfileIcon;