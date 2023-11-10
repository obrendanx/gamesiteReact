import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useUserFollowers } from '../../../Querys/showFollowersQuery';

const Text = styled.span`
  color:#fff;
  &:after{
    color:#fff;
  }
  &:hover{
    color:#F36644;
  }
`

export default function Followers() {
  const { user } = useContext(AuthContext); 
  const username = user.username;
  const { data: followers, isLoading } = useUserFollowers(username);

  if(isLoading || followers === undefined) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  return (
    <div>
      <h1>{followers.followers.length}</h1>
      <h1>Followers</h1>
      <ul className={css`
        list-style:none;
        margin-top:5px;
      `}>
        {followers.followers.map((follower) => (
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

