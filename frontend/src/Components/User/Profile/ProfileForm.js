import React, { useState, useContext } from "react";
import { TwitterPicker } from "react-color";
import styled from "@emotion/styled";
import Input from '../../Form/Input'
import Label from "../../Form/Label";
import Submit from "../../Form/Submit";
import { css } from "@emotion/css";
import { AuthContext } from "../Auth/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { useShowUser } from "../../../Querys/showUserQuery";
import useUpdateUser from "../../../Querys/addUpdatedUserQuery";

const ProfileFormDiv = styled.div`
    padding:10px 10px 10px 5px;
    margin-top:20px;
  `

const Error = styled.span`
    font-size:0.8em;
    color:#F44336;
    margin-left:2.5%;
`

const ProfileForm = ({ onSubmit, initialValues }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [profileIconColor, setProfileIconColor] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [details, setDetails] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const { user } = useContext(AuthContext);
  const { data: theUser, isLoading, refetch } = useShowUser(user.username);
  const updateUserMutation = useUpdateUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    setError({});
    let hasError = false;
    const newError = {};

    // Validate username
    if (username && (username.length < 6 || username.length > 14 || !/^[a-zA-Z0-9]+$/.test(username))) {
      newError.username = "Username must be between 6 and 14 characters and contain only letters and numbers";
      hasError = true;
    }

    // Validate password
    if (password && (password.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.*?&])[A-Za-z\d@$!%.*?&]{8,}$/.test(password))) {
      newError.password = "Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols";
      hasError = true;
    }

    if (password !== retypePassword) {
      newError.retypePassword = "Passwords do not match";
      hasError = true;
    }

    // Validate email
    if (email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newError.email = "Email must be a valid email address";
      hasError = true;
    }

    // Validate full name
    if (fullName && /[^a-zA-Z ]/.test(fullName)) {
      newError.fullName = "Full name must contain only letters and spaces";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return;
    }

    //Only add fields that have been updated
    const updatedFields = {};

    if (username) {
      updatedFields.username = username;
    }
    if (password) {
      updatedFields.password = password;
    }
    if (email) {
      updatedFields.email = email;
    }
    if (fullName) {
      updatedFields.fullName = fullName;
    }
    if (profileIconColor) {
      updatedFields.profileIconColor = profileIconColor;
    }

    if (Object.keys(updatedFields).length === 0) {
      console.log("No fields to update.");
      return;
    }

    await updateUserMutation.mutateAsync({
        username: user.username,
        updatedFields: updatedFields
      });

    refetch();
  };

  // eslint-disable-next-line no-unused-vars
  const handleColorChange = (color) => {
    setProfileIconColor(color.hex);
  };
  // eslint-disable-next-line no-unused-vars
  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  console.log(theUser);

  if(isLoading) {
    return(
      <div>Loading ...</div>
    );
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
      >
      <ProfileFormDiv>
        <Label htmlfor='fullName' text={'Full Name:' + theUser.fullName} primary></Label>
        <Input
                type="text"
                placeholder="Fullname: "
                value={fullName}
                onValueChange={setFullName}
                small
                left="5px"
                />
        {error.fullName && <Error className="error">{error.fullName}</Error>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='username' text={'Username:' + theUser.username} primary></Label>
        <Input
                type="text"
                placeholder="Username: "
                value={username}
                onValueChange={setUsername}
                small
                left="5px"
                />
        {error.username && <Error className="error">{error.username}</Error>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='email' text={'Email:' + theUser.email} primary></Label>
        <Input
                type="text"
                placeholder="Email: "
                value={email}
                onValueChange={setEmail}
                small
                left="5px"
                />
        {error.email && <Error className="error">{error.email}</Error>}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlFor="password" text="New Password:" primary></Label>
        <Input
          type="password"
          placeholder="New Password: "
          value={password}
          onValueChange={setPassword}
          small
          left="5px"
        />
        {error.password && (
          <Error className="error">{error.password}</Error>
        )}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlFor="retypePassword" text="Retype Password:" primary></Label>
        <Input
          type="password"
          placeholder="Retype Password: "
          value={retypePassword}
          onValueChange={setRetypePassword}
          small
          left="5px"
        />
        {error.retypePassword && (
          <Error className="error">{error.retypePassword}</Error>
        )}
      </ProfileFormDiv>
      <ProfileFormDiv>
        <Label htmlfor='profileIconColor' text='Profile Icon Color:' primary></Label>
        <TwitterPicker
          color={profileIconColor}
          onChangeComplete={(color) => setProfileIconColor(color.hex)}
          className={css`
            margin-top:15px;
          `}
        />
      </ProfileFormDiv>
      <Submit small left="5px"></Submit>
    </form>
  </div>
  );
};

export default ProfileForm