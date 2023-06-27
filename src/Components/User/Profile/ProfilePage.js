import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfileForm from "./ProfileForm";
import { selectUser } from "../../../app/features/userSlice";

const ProfilePage = () => {
  //array of user details
  const [user, setUsers] = useState({});
  //loading state
  const [isLoading, setIsLoading] = useState(true);
  //grabs user logged in status in store
  const isLoggedIn = useSelector(selectUser);

  async function fetchUsers() {
    try {
      if(isLoggedIn){
        //if user is logged in fetch that user data from db
        //store data in the user array
        const username = isLoggedIn.name;
        const res = await axios.get(`http://localhost:5000/app/api/user/${username}`);
        setUsers(res.data)
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    //updates page with fetched user if logged in
    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  const handleUpdateProfile = async (updatedUser) => {
    setIsLoading(true);
    if(isLoggedIn){
      //handles data for updating the profile for the specified username
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
      {/* sends props to ProfileForm of the user details */}
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
