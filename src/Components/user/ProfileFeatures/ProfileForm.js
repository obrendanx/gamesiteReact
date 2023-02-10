import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileForm = ({ onSubmit, initialValues }) => {
  const [fullName, setFullName] = useState(initialValues.fullName);
  const [username, setUsername] = useState(initialValues.username);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [profileIconColor, setProfileIconColor] = useState(
    initialValues.profileIconColor
  );
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5000/app/api/user/${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName, username, email, password, profileIconColor });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p>{user.fullName}</p>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{user.username}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{user.email}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profileIconColor">Profile Icon Color:</label>
        <input
          type="text"
          id="profileIconColor"
          value={profileIconColor}
          onChange={(e) => setProfileIconColor(e.target.value)}
        />
        <p>{user.profileIconColor}</p>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;