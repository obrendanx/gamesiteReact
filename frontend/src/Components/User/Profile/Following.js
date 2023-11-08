import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useUserFollowing } from '../../../Querys/showFollowingQuery';

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
  //const [following, setFollowing] = useState([]);
  const { user } = useContext(AuthContext); 
  const username = user.username;
  const { data: following, refetch, isLoading } = useUserFollowing(username);

  if(isLoading || following === undefined) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  return (
    <div>
      <h1>{following.following.length}</h1>
      <h1>Following</h1>
      <ul className={css`
        list-style:none;
        margin-top:5px;
      `}>
        {following.following.map((follower) => (
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