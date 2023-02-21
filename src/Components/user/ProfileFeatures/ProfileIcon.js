import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import axios from 'axios';

const ProfileIcon = () => {
  //used to grab user information
  const user = useSelector(selectUser);
  const name = user.name;
  const [color, setColor] = useState("000");
  const username = user.name;

  useEffect(() => {
    async function fetchData() {
    
      const res = await axios.get(`http://localhost:5000/app/profile-icon?username=${username}`);
      setColor(res.data.color);
    }
    fetchData();
  }, []);

  const initials = name ? name.split(" ").map(word => word[0]).join("") : "?";

  return (
    <div style={{ backgroundColor: `${color}` }} className="profile-icon">
      {initials}
    </div>
  );
};

export default ProfileIcon;