import React, { useState, useEffect } from "react";
import axios from "axios";
import { CirclePicker } from "react-color";
import styled from "@emotion/styled";
import Input from '../../Form/Input'
import Label from "../../Form/Label";
import Submit from "../../Form/Submit";

const ProfileFormDiv = styled.div`
    padding:10px 10px 10px 5px;
    margin-top:20px;
  `

const ProfileForm = ({ onSubmit, initialValues }) => {
  const [fullName, setFullName] = useState(initialValues.fullName);
  const [username, setUsername] = useState(initialValues.username);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [profileIconColor, setProfileIconColor] = useState(
    initialValues.profileIconColor
  );
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  useEffect(() => {
    //fetch the current user
    const fetchUser = async () => {
      setIsLoading(true);
      const response = await axios.get(`https://gamesite-backend.onrender.com/app/api/user/${username}`);
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
  };

  // eslint-disable-next-line no-unused-vars
  const handleColorChange = (color) => {
    setProfileIconColor(color.hex);
  };
  // eslint-disable-next-line no-unused-vars
  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <ProfileFormDiv>
        <Label htmlfor='fullName' text='Full Name:' primary></Label>
        <Input
                type="text"
                placeholder="Fullname: "
                value={fullName}
                onValueChange={setFullName}
                small
                left="5px"
                />
        {error.fullName && <p className="error">{error.fullName}</p>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='username' text='Username:' primary></Label>
        <Input
                type="text"
                placeholder="Username: "
                value={username}
                onValueChange={setUsername}
                small
                left="5px"
                />
        {error.username && <p className="error">{error.username}</p>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='email' text='Email:' primary></Label>
        <Input
                type="text"
                placeholder="Email: "
                value={email}
                onValueChange={setEmail}
                small
                left="5px"
                />
        {error.email && <p className="error">{error.email}</p>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='password' text='Password:' primary></Label>
        <Input
                type="password"
                placeholder="Password: "
                value={password}
                onValueChange={setPassword}
                small
                left="5px"
                />
        {error.password && <p className="error">{error.password}</p>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='profileIconColor' text='Profile Icon Color:' primary></Label>
        <CirclePicker
          color={profileIconColor}
          onChangeComplete={(color) => setProfileIconColor(color.hex)}
        />
      </ProfileFormDiv>
      <Submit small left="5px"></Submit>
    </form>
  </div>
  );
};

export default ProfileForm