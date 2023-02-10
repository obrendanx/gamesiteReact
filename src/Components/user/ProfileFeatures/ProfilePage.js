import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfileForm from "./ProfileForm";
import { selectUser } from "../../../app/features/userSlice";

const ProfilePage = () => {
  const [user, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(selectUser);

  async function fetchUsers() {
    try {
      if(isLoggedIn){
        const username = isLoggedIn.name;
        const res = await axios.get(`http://localhost:5000/app/api/user/${username}`);
        setUsers(res.data)
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(user);
  console.log(isLoggedIn.name);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  const handleUpdateProfile = async (updatedUser) => {
    setIsLoading(true);
    if(isLoggedIn){
        const username = isLoggedIn.name;
        await axios.put(`http://localhost:5000/app/api/userupdate/${username}`, updatedUser);
    }
    setUsers(updatedUser);
    setIsLoading(false);
  };

  if (!isLoggedIn) return <div>Please log in to view your profile</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileForm 
        initialValues={{
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          password: user.password,
          profileIconColor: user.profileIconColor,
        }}
        onSubmit={handleUpdateProfile} 
      />
    </div>
  );
};

export default ProfilePage;
