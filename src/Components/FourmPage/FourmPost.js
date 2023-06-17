import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/features/userSlice';
import TextArea from '../Form/TextArea';
import Input from '../Form/Input';
import Label from '../Form/Label'

const Submit = styled.input`
  border: none;
  height: 20px;
  width: 70px;
  margin-left: 2.5px;
  color: #f44336;
  border-radius: 50px;
  font-weight: 900;
`;

function FourmInput() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setPostedBy(user.name);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = {
        subject,
        message,
        postedBy,
      };

      const response = await axios.post('http://localhost:5000/app/fourmspost', newPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      // Reset form fields
      setSubject('');
      setMessage('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={css`
          height: 450px;
          width: 85%;
          background: #1c1c1c;
          padding: 20px;
          margin: auto;
          font-family: Roboto, sans-serif;
          border-radius: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      >
        <Label htmlFor="subject" text="Subject:" primary/>
        <br />
        <Input
                type="text"
                placeholder="Subject: "
                value={subject}
                onValueChange={setSubject}
                left="0"
                />
        <br />

        <Label htmlFor="message" text="Message:" primary/>
        <br />
        <TextArea
                type="text"
                placeholder="Message Here: "
                value={message}
                onValueChange={setMessage}
                left="0"
                />
        <br />

        <Submit type="submit" value="Post" />
      </form>
    </div>
  );
}

export default FourmInput;