import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProfileForm from "./ProfileForm";
import { AuthContext } from "../Auth/AuthContext";

const ProfilePage = () => {
  const [users, setUsers] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, user } = useContext(AuthContext);

  async function fetchUsers() {
    try {
      if (isLoggedIn) {
        const username = user.username;
        const res = await axios.get(`https://gamesite-backend.onrender.com/app/api/user/${username}`);
        setUsers(res.data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  const handleUpdateProfile = async (updatedUser) => {
    setIsLoading(true);
    if (isLoggedIn) {
      const username = isLoggedIn.name;
      const response = await axios.put(`http://localhost:5000/app/api/userupdate/${username}`, updatedUser);
      setUsers(response.data); 
    }
    setIsLoading(false);
  }; 

  if (!isLoggedIn) return <div>Please log in to view your profile</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* sends props to ProfileForm of the user details */}
      <ProfileForm 
        initialValues={{
          fullName: users.fullName,
          username: users.username,
          email: users.email,
          password: users.password,
          profileIconColor: users.profileIconColor,
        }}
        onSubmit={handleUpdateProfile} 
      />
    </div>
  );
};

export default ProfilePage;
