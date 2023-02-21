import React, { useState, useEffect } from "react";
import axios from "axios";
import { CirclePicker } from "react-color";

const ProfileForm = ({ onSubmit, initialValues }) => {
  const [fullName, setFullName] = useState(initialValues.fullName);
  const [username, setUsername] = useState(initialValues.username);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [profileIconColor, setProfileIconColor] = useState(
    initialValues.profileIconColor
  );
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/app/api/user/${username}`);
      setUser(response.data);
      setIsLoading(false);
    };
    fetchUser();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    setError({});
    let hasError = false;
    const newError = {};

    // Validate username
    if (
      !username ||
      username.length < 6 ||
      username.length > 14 ||
      !/^[a-zA-Z0-9]+$/.test(username)
    ) {
      newError.username =
        "Username must be between 6 and 14 characters and contain only letters and numbers";
      hasError = true;
    }

    // Validate password
    if (
      !password ||
      password.length < 8 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      newError.password =
        "Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols";
      hasError = true;
    }

    // Validate email
    if (
      !email ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      newError.email = "Email must be a valid email address";
      hasError = true;
    }

    // Validate full name
    if (!fullName || !/^[a-zA-Z]+$/.test(fullName)) {
      newError.fullName = "Full name must contain only letters";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return;
    }

    await onSubmit({
      fullName,
      username,
      email,
      password,
      profileIconColor,
    });
    console.log({ fullName, username, email, password, profileIconColor }); // add this line
  };

  const handleColorChange = (color) => {
    setProfileIconColor(color.hex);
  };

  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit}>
      <div className="profile-form-div">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {error.fullName && <p className="error">{error.fullName}</p>}
        <p>Current: {user?.fullName}</p>
      </div>
      <div className="profile-form-div">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username && <p className="error">{error.username}</p>}
        <p>Current: {user?.username}</p>
      </div>
      <div className="profile-form-div">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p className="error">{error.email}</p>}
        <p>Current: {user?.email}</p>
      </div>
      <div className="profile-form-div">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className="error">{error.password}</p>}
      </div>
      <div className="profile-form-div">
        <label htmlFor="profileIconColor">Profile Icon Color:</label>
        <CirclePicker
          color={profileIconColor}
          onChangeComplete={(color) => setProfileIconColor(color.hex)}
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  </div>
  );
};

export default ProfileForm