import React, { useState, useEffect } from "react";
import axios from "axios";
import { CirclePicker } from "react-color";
import styled from "@emotion/styled";
import Input from '../../Form/Input'
import Label from "../../Form/Label";
import Submit from "../../Form/Submit";

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
    //fetch the current user
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
  };

  const handleColorChange = (color) => {
    setProfileIconColor(color.hex);
  };

  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const ProfileFormDiv = styled.div`
    // height:100%;
    // width:100%;
    // margin-top:20px;
    // margin-bottom:20px;
    // padding:50px 10px 10px 20px;
    // background:#1C1C1C;
    // font-size:1em;
    // font-family:Roboto, sans-serif;
    // color:#fff; 
    // border-radius:15px;
    padding:10px 10px 10px 5px;
  `

  const ProfileFormSubDiv = styled.div`
    // margin:10px;
    // width:100%;
  `

  const Button = styled.button`
    margin:10px;
    border:none;
    background:#252627;
    color:#fff;
    width:30%;
    padding:2.5%;
    text-align:center;
  `

  const Text = styled.p`
    margin-top:7.5px;  
  `


  return (
    <ProfileFormDiv>
      <form onSubmit={handleSubmit}>
      <ProfileFormSubDiv>
        {/* <label htmlFor="fullName">Full Name:</label> */}
        <Label htmlfor='fullName' text='Full Name:' primary></Label>
        {/* <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        /> */}
        <Input
                type="text"
                placeholder="Fullname: "
                value={fullName}
                onValueChange={setFullName}
                small
                left="5px"
                />
        {error.fullName && <p className="error">{error.fullName}</p>}
        {/* <p>Current: {user?.fullName}</p> */}
      </ProfileFormSubDiv>
      <ProfileFormSubDiv>
        {/* <label htmlFor="username">Username:</label> */}
        <Label htmlfor='username' text='Username:' primary></Label>
        {/* <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <Input
                type="text"
                placeholder="Username: "
                value={username}
                onValueChange={setUsername}
                small
                left="5px"
                />
        {error.username && <p className="error">{error.username}</p>}
        {/* <Text>Current: {user?.username}</Text> */}
      </ProfileFormSubDiv>
      <ProfileFormSubDiv>
        {/* <label htmlFor="email">Email:</label> */}
        <Label htmlfor='email' text='Email:' primary></Label>
        {/* <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <Input
                type="text"
                placeholder="Email: "
                value={email}
                onValueChange={setEmail}
                small
                left="5px"
                />
        {error.email && <p className="error">{error.email}</p>}
        {/* <Text>Current: {user?.email}</Text> */}
      </ProfileFormSubDiv>
      <ProfileFormSubDiv>
        {/* <label htmlFor="password">Password:</label> */}
        <Label htmlfor='password' text='Password:' primary></Label>
        {/* <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <Input
                type="password"
                placeholder="Password: "
                value={password}
                onValueChange={setPassword}
                small
                left="5px"
                />
        {error.password && <p className="error">{error.password}</p>}
      </ProfileFormSubDiv>
      <ProfileFormSubDiv>
        {/* <label htmlFor="profileIconColor">Profile Icon Color:</label> */}
        <Label htmlfor='profileIconColor' text='Profile Icon Color:' primary></Label>
        <CirclePicker
          color={profileIconColor}
          onChangeComplete={(color) => setProfileIconColor(color.hex)}
        />
      </ProfileFormSubDiv>
      {/* <Button type="submit">Update Profile</Button> */}
      <Submit small left="5px"></Submit>
    </form>
  </ProfileFormDiv>
  );
};

export default ProfileForm