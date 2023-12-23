import React from 'react';
import styled from '@emotion/styled';
import MediumHeader from '../Headers/MediumHeader';
import { Link } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { css, Global } from '@emotion/react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useShowPosts } from '../../Querys/showPostsQuery';
import LikeBtn from '../Form/Buttons/LikeBtn';
import DislikeBtn from '../Form/Buttons/DislikeBtn';
import CommentBox from '../Form/CommentBox';

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
  height: 75px;
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

const ButtonsGroup = styled.div`
  width:25%;
  display:flex;
  flex-direction:row;
  gap:5px;
  margin-top:5px;
`

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(dateString).toLocaleString(undefined, options);
}

function Post() {
  const { data: posts, isLoading } = useShowPosts();
  const allowedTags = [
    'p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'ul', 'ol', 'li', 'a', 'img', 'code', 'br', 'div',
    'del', 'underline', 'strikethrough', 'img', 
  ];
  const allowedAttributes = {
    img: ['src', 'height', 'width'], // Allow only the src attribute for img tags
  };

  if (isLoading) {
    return (
      <PacmanLoader
        loading={isLoading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#F44034"
        cssOverride={override}
      />
    );
  }

  return (
    <Wrapper>
      <Global
        styles={css`
          img {
            max-width: 200px;
            max-height: 200px;
          }
        `}
      />
      <List>
        {Array.isArray(posts.data) ? (
        posts.data.slice().reverse().map(post => (
          <ListItem key={post._id}>
            <Subject>
              <MediumHeader text={post.subject} />
            </Subject>

            <Comment>
              <Content
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(post.message, {
                    allowedTags,
                    allowedAttributes,
                  }),
                }}
              />
            </Comment>

            <UserDetails>
              <SubHeader>{formatDate(post.date)}</SubHeader>
              <SubHeader>
                <Link to={`/user/${post.postedBy}`}>{post.postedBy}</Link>
                <ButtonsGroup>
                  <LikeBtn total={post.likeTotal} postId={post._id} likedUsers={post.usersWhoLiked} />
                  <DislikeBtn total={post.dislikeTotal} postId={post._id} dislikeUsers={post.usersWhoDisliked}/>
                </ButtonsGroup>
              </SubHeader>
            </UserDetails>
            <CommentBox userComment={post.userComments}/>
          </ListItem>
        ))
      ) : (
        <p className={css`color: #fff; text-align:center;`}>No posts available</p>
      )}
      </List>
    </Wrapper>
  );
}

export default Post;

