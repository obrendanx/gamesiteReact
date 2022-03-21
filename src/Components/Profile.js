import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/userSlice";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Profile