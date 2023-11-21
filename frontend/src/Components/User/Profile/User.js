import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import ProfileIcon from './ProfileIcon';
import LargeHeader from '../../Headers/LargeHeader'
import { css, Global } from '@emotion/react';
import Button from '../../Form/Buttons/Button';
import MediumHeader from '../../Headers/MediumHeader'
import styled from '@emotion/styled';
import sanitizeHtml from 'sanitize-html';
import FavouriteCard from '../../AnimePage/FavouriteCard'
import PacmanLoader from "react-spinners/PacmanLoader";
import { useUserFavorites } from '../../../Querys/showFavoritesQuery';
import { useShowUserPosts } from '../../../Querys/showUserPostsQuery';
import { useShowUser } from '../../../Querys/showUserQuery';
import useRemovePost from '../../../Querys/deletePostQuery';
import useFollowUser from '../../../Querys/addFollowUserQuery';
import useUnfollowUser from '../../../Querys/deleteFollowUserQuery';
import { useUserFollowers } from '../../../Querys/showFollowersQuery';

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

// const Error = styled.span`
//     font-size:0.8em;
//     color:#F44336;
//     margin-left:2.5%;
// `

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(dateString).toLocaleString(undefined, options);
}

function ShowFavourites(username) {
  const { data: userFavourites, isLoading } = useUserFavorites(username.username);

  if(isLoading) {
    return (
      <div>
        <span>Loading Favourites ...</span>
      </div>
    );
  }

  if(!userFavourites) {
    return(
      <div></div>
    );
  }

  return (
    <FavouriteCard user={username} favouriteList={userFavourites} key={userFavourites._id}/>
  );
}

function User() {
  const { user: currentUser, isLoggedIn } = useContext(AuthContext);
  const { username } = useParams();
  const { data: followers } = useUserFollowers(username);
  const [loading, setLoading] = useState(false);
  const [isCurrentUserFollowing, setIsCurrentUserFollowing] = useState(false);
  const [flwBtnText, setFlwBtnText] = useState("Follow");
  const { data: userPosts, isLoading } = useShowUserPosts(username);
  const { data: user } = useShowUser(username);
  const removePostMutation = useRemovePost();
  const addFollowingMutation = useFollowUser();
  const addUnfollowingMutation = useUnfollowUser();
  const allowedTags = [
    'p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'ul', 'ol', 'li', 'a', 'img', 'code', 'br', 'div',
    'del', 'underline', 'strikethrough', 'img', 
  ];
  const allowedAttributes = {
    img: ['src', 'height', 'width'], //allow the src, height and width attributes for an image tag 
  };
  const navigate = useNavigate();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "10px"
  };

  //Fetches profile and posts if username changes
  useEffect(() => {
  if (followers !== undefined) {
    const isFollowing = followers.followers.some(
      (follower) => follower.username === currentUser.username
    );

    if (isFollowing) {
      setIsCurrentUserFollowing(true);
      setFlwBtnText('Unfollow');
    } else {
      setIsCurrentUserFollowing(false);
      setFlwBtnText('Follow');
    }
  }
}, [followers, currentUser]);

  //Logic for handling the following and unfollowing of users
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

  ////////////////////////////
  //LOGIC FOR FOLLOWING USER//
  ////////////////////////////

  const followUser = async () => {
    await addFollowingMutation.mutateAsync({
        username: username,
        currentUserUsername: currentUser.username
      });
      setIsCurrentUserFollowing(true);
      setFlwBtnText('Unfollow');
   };

  //////////////////////////////
  //LOGIC FOR UNFOLLOWING USER//
  //////////////////////////////

  const unfollowUser = async () => {
    await addUnfollowingMutation.mutateAsync({
        username: username,
        currentUserUsername: currentUser.username
      });
      setIsCurrentUserFollowing(false);
      setFlwBtnText('Follow');
  };

  ////////////////////////////////
  //LOGIC FOR DELETING USER POST//
  ////////////////////////////////

  const handleRemovePost = async (id) => {
      await removePostMutation.mutateAsync({
        postId: id,
      });
  };

  //If user is not found display a loading icon

  if (!user) {
    return ( 
    <div className={css`
      height:100vh;
      width:100vw;
    `}>
      <PacmanLoader
        loading={!user}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#F44034"
        cssOverride={override}
      />
    </div>
    );
  }

  // if(isLoading) {
  //   return (
  //     <div className={css`
  //       height:100vh;
  //       width:100vw;
  //     `}>
  //       <span>Loading Posts ...</span>
  //       <PacmanLoader
  //         loading={!user}
  //         size={15}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //         color="#F44034"
  //         cssOverride={override}
  //       />
  //     </div>
  //   );
  // }

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
            text={loading ? 'Loading...' : flwBtnText}
          />
        }

        <MediumHeader text={user.fullName + 's posts:'}/>
        
        <Wrapper>
          { isLoading ? 
            <div className={css`
              height:100vh;
              width:100vw;
            `}>
              <span>Loading Posts ...</span>
              <PacmanLoader
                loading={!user}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#F44034"
                cssOverride={override}
              />
            </div> 
            : 
            <List>
              {userPosts.data.slice().reverse().map(post => (
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
                    <SubHeader>{formatDate(post.date)}</SubHeader>
                    { currentUser.username === user.username && isLoggedIn ? (
                      <DeleteBtn onClick={() => handleRemovePost(post._id)}>remove post</DeleteBtn>
                    ) : null}
                  </UserDetails>
                </ListItem>
              ))}
            </List>
          }
        </Wrapper>
        
        <MediumHeader text={user.fullName + 's favourite anime:'}/>  

        <div>
          <ShowFavourites username={username}/>
        </div>
      </SubDiv>

    </div>
  );
}

export default User;