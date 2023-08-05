import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';
import LargeHeader from '../../Headers/LargeHeader'
import { css } from '@emotion/css';
import Button from '../../Form/Buttons/Button';
import MediumHeader from '../../Headers/MediumHeader'
import styled from '@emotion/styled';

const Wrapper = styled.div`
  min-height: 250px;
  width: 85%;
  background: #1C1C1C;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Subject = styled.div`
  height: 50px;
  width: 100%;
`;

const Comment = styled.div`
  min-height: 100px;
  margin: 10px;
  width: 100%;
  font-family: Roboto, sans-serif;
  @media (max-width: 770px) {
    margin-left: 0px;
  }
`;

const Content = styled.p`
  color: #fff;
  font-size: 1em;
  padding: 5px;
  margin-left: 10px;
  font-family: 'Oswald', sans-serif;
`;

const UserDetails = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px;
`;

const SubHeader = styled.h3`
  margin-left: 10px;
  font-size: 0.7em;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 300;
`;

function User() {
  const { user: currentUser, isLoggedIn } = useContext(AuthContext);
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  async function fetchPosts(setPosts) {
    try {
      const res = await axios.get(`https://gamesite-backend.onrender.com/app/showuserposts/${username}`);
      setPosts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts(setPosts);
  }, []); // Removed the unnecessary dependency array

  const isCurrentUserFollowing = followers.some(
    (follower) => follower.username === currentUser.username
  );

  useEffect(() => {
    if (username) {
      fetchUserProfile();
      fetchFollowers();
    }
  }, [username]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://gamesite-backend.onrender.com/app/api/user/${username}`);
      if (response.status === 200) {
        setUser(response.data);
      } else {
        setError('Failed to fetch user profile');
      }
    } catch (error) {
      setError('Failed to fetch user profile');
    }
  };

  const fetchFollowers = async () => {
    try {
      const response = await axios.get(`https://gamesite-backend.onrender.com/app/api/followers/${username}`);
      if (response.status === 200) {
        const isCurrentUserFollower = response.data.followers.some(
          (follower) => follower.username === currentUser.username
        );
        setFollowers(
          isCurrentUserFollower
            ? response.data.followers
            : [...response.data.followers, currentUser]
        );
      } else {
        setError('Failed to fetch followers');
      }
    } catch (error) {
      setError('Failed to fetch followers');
    }
  };

  const handleFollowToggle = async () => {
    if (isLoggedIn) {
      if (isCurrentUserFollowing) {
        await unfollowUser();
      } else {
        await followUser();
      }
    } else {
      navigate('/login');
    }
  };

  const followUser = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post(
        `https://gamesite-backend.onrender.com/app/api/follow/${username}`,
        { username: currentUser.username },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('You are now following this user.');
        setFollowers([...followers, currentUser]);
      } else {
        setError('Failed to follow user');
      }
    } catch (error) {
      setError('Failed to follow user');
    }

    setLoading(false);
  };

  const unfollowUser = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post(
        `https://gamesite-backend.onrender.com/app/api/unfollow/${username}`,
        { username: currentUser.username },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('You have unfollowed this user.');
        setFollowers(followers.filter((follower) => follower.username !== currentUser.username));
      } else {
        setError('Failed to unfollow user');
      }
    } catch (error) {
      setError('Failed to unfollow user');
    }

    setLoading(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={css`
        display:flex;
        flex-direction:row;
        gap:5px;
        width:100%;
        margin-left:7.5%;
        margin-top:5%;
      `}>
        <ProfileIcon username={user.username} className={`margin: 0 !important;`}/>
        <LargeHeader  text={user.username}/>
      </div>
      <div className={css`
        width:85%;
        display:flex;
        flex-direction:column;
        margin-left:7.5%;
        gap:7.5px;
      `}>
        <Button 
          handleClick={handleFollowToggle} 
          text={loading ? 'Loading...' : isCurrentUserFollowing ? 'Unfollow' : 'Follow'}
        />
        {error && <div>Error: {error}</div>}
        {successMessage && <div>{successMessage}</div>}
        <MediumHeader text={user.fullName + 's posts:'}/>
        {/* <h3>Followers:</h3>
        <ul>
          {followers.map((follower) => (
            <li key={follower._id}>
              <Link to={`/user/${follower.username}`}>{follower.username}</Link>
            </li>
          ))}
        </ul> */}

        <Wrapper>
          <ul
            className={css`
              display: flex;
              flex-direction: column;
              gap: 10px;
              list-style: none;
            `}
          >
            {posts.map(post => (
              <li
                className={css`
                  &:nth-child(even) {
                    background: #212121;
                  }
                `}
                key={post._id}
              >
                <Subject>
                  <MediumHeader text={post.subject} />
                </Subject>

                <Comment>
                  <Content>{post.message}</Content>
                </Comment>

                <UserDetails>
                  <SubHeader>{post.date}</SubHeader>
                </UserDetails>
              </li>
            ))}
          </ul>
        </Wrapper>
      </div>
    </div>
  );
}

export default User;