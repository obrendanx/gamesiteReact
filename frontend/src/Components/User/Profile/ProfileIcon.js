import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { AuthContext } from '../Auth/AuthContext';

const ProfileIcon = ({username, auto}) => { 
  //used to grab user information
  const { user } = useContext(AuthContext);
  const [color, setColor] = useState("000");

  const ProfileIconDiv = styled.div`
    padding:10px;
    border-radius:100%;
    width:50px;
    height:50px;
    text-align:center;
    line-height:25px;
    margin:0 ${auto};
    margin-top:17.5px;
    margin-bottom:17.5px;
    color:#fff;
  `

  useEffect(() => {
    async function fetchData() {
    
      const res = await axios.get(`http://localhost:5001/fetchprofileicon?username=${username}`);
      setColor(res.data.color);
    }
    fetchData();
  }, [username]);

  const initials = username ? username.split(" ").map(word => word[0]).join("") : "?"; 

  return (
    <ProfileIconDiv style={{ backgroundColor: `${color}` }} className="profile-icon">
      {initials}
    </ProfileIconDiv>
  );
};

export default ProfileIcon;