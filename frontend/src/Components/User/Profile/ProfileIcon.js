import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useProfileIcon } from '../../../Querys/showProfileIcon';

const ProfileIcon = ({username, auto}) => { 
  const [color, setColor] = useState("000");
  const { data: profileIcon } = useProfileIcon(username);

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
    if(profileIcon) {
      setColor(profileIcon.color);
    }
  }, [profileIcon]);

  const initials = username ? username.split(" ").map(word => word[0]).join("") : "?"; 

  return (
    <ProfileIconDiv style={{ backgroundColor: `${color}` }} className="profile-icon">
      {initials}
    </ProfileIconDiv>
  );
};

export default ProfileIcon;