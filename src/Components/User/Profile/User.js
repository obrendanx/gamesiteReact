import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';

function User() {
  const { user: currentUser, isLoggedIn } = useContext(AuthContext);
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

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
      const response = await axios.get(`http://localhost:5000/app/api/user/${username}`);
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
      const response = await axios.get(`http://localhost:5000/app/api/followers/${username}`);
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
        `http://localhost:5000/app/api/follow/${username}`,
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
        `http://localhost:5000/app/api/unfollow/${username}`,
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
      <ProfileIcon username={user.username} />
      <h1>{user.username}</h1>
      <h2>{user.fullName}</h2>
      <h3>Followers:</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower._id}>
            <Link to={`/user/${follower.username}`}>{follower.username}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleFollowToggle} disabled={loading}>
        {loading ? 'Loading...' : isCurrentUserFollowing ? 'Unfollow' : 'Follow'}
      </button>
      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default User;