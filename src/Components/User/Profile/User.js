import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';
import LargeHeader from '../../Headers/LargeHeader'
import { css, Global } from '@emotion/react';
import Button from '../../Form/Buttons/Button';
import MediumHeader from '../../Headers/MediumHeader'
import styled from '@emotion/styled';
import sanitizeHtml from 'sanitize-html';
import { currentBlockContainsLink } from 'draft-js/lib/RichTextEditorUtil';

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
  height: 65px;
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

const DeleteBtn = styled.button`
  margin-top:5px;
  text-align:left;
  margin-left:10px;
  font-size: 0.7em;
  color: #F3664A;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  border:none;
  height:10px;
  width:100px;
  background:none;
  &:hover{
    cursor:pointer;
  }
`

const MainDiv = styled.div`
  display:flex;
  flex-direction:row;
  gap:5px;
  width:100%;
  margin-left:7.5%;
  margin-top:5%;
`

const SubDiv = styled.div`
  width:85%;
  display:flex;
  flex-direction:column;
  margin-left:7.5%;
  gap:7.5px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`

const ListItem = styled.li`
  &:nth-of-type(even) {
    background: #212121;
  }
`

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
  const allowedTags = [
    'p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'ul', 'ol', 'li', 'a', 'img', 'code', 'br', 'div',
    'del', 'underline', 'strikethrough', 'img', 
  ];
  const allowedAttributes = {
    img: ['src', 'height', 'width'], // Allow only the src attribute for img tags
  };

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
  }, []); 

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

  const handleRemovePost = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/app/deletepost/${id}`);
        fetchPosts(setPosts);
      } catch (err) {
        console.error(err);
      }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Global
        styles={css`
          img {
            max-width:200px;
            max-height:200px;
          }
        `}
      />
      <MainDiv>
        <ProfileIcon username={user.username} className={`margin: 0 !important;`}/>
        <LargeHeader  text={user.username}/>
      </MainDiv>
      <SubDiv>
        { currentUser.username === user.username && isLoggedIn ? (
          null
        ) : 
          <Button 
            handleClick={handleFollowToggle} 
            text={loading ? 'Loading...' : isCurrentUserFollowing ? 'Unfollow' : 'Follow'}
          />
        }
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
          <List>
            {posts.map(post => (
              <ListItem
                key={post._id}
              >
                <Subject>
                  <MediumHeader text={post.subject} />
                </Subject>

               <Comment>
                <Content
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.message, {
                    allowedTags, 
                    allowedAttributes,
                  }) }}
                />
              </Comment> 

                <UserDetails>
                  <SubHeader>{post.date}</SubHeader>
                  { currentUser.username === user.username && isLoggedIn ? (
                    <DeleteBtn onClick={() => handleRemovePost(post._id)}>remove post</DeleteBtn>
                  ) : null}
                </UserDetails>
              </ListItem>
            ))}
          </List>
        </Wrapper>
      </SubDiv>
    </div>
  );
}

export default User;