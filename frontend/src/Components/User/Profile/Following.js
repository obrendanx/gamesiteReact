import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import config from '../../../config';

const Text = styled.span`
  color:#fff;
  &:after{
    color:#fff;
  }
  &:hover{
    color:#F36644;
  }
`

export default function Following() {
  const [following, setFollowing] = useState([]);
  const { user } = useContext(AuthContext); 
  const username = user.username;
  // Set the environment (e.g., 'development' or 'production')
  const environment = process.env.NODE_ENV || 'development';
  // Get the API URL based on the environment
  const userUrl = config[environment].user;
  const postUrl = config[environment].post;
  const animeUrl = config[environment].anime;

  useEffect(() => {
    fetchFollowing();
  }, [username]);

  const fetchFollowing = async () => {
    try {
      const response = await axios.get(`${userUrl}/following/${username}`);
      if (response.status === 200) {
        setFollowing(response.data.following);
      } else {
       console.log("Followers not found");
      }
    } catch (error) {
      console.log("Follower not found");
    }
  };

  return (
    <div>
      <h1>{following.length}</h1>
      <h1>Following</h1>
      <ul className={css`
        list-style:none;
        margin-top:5px;
      `}>
        {following.map((follower) => (
          <li 
            key={follower._id}
            className={css`
              margin-top:5px;
            `}
          >
            <Link to={`/user/${follower.username}`}><Text>{follower.username}</Text></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}