import React, { useState, useEffect, CSSProperties } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import MediumHeader from '../Headers/MediumHeader';
import { Link } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { css, Global } from '@emotion/react';
import PacmanLoader from "react-spinners/PacmanLoader";
import config from '../../config';

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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

async function fetchPosts(setPosts) {
  try {
    // Set the environment (e.g., 'development' or 'production')
    const environment = process.env.NODE_ENV || 'development';
    // Get the API URL based on the environment
    const postUrl = config[environment].post;
    const res = await axios.get(`${postUrl}/showposts`);
    setPosts(res.data.data);
  } catch (err) {
    console.log(err);
  }
}

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const allowedTags = [
    'p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'ul', 'ol', 'li', 'a', 'img', 'code', 'br', 'div',
    'del', 'underline', 'strikethrough', 'img', 
  ];
  const allowedAttributes = {
    img: ['src', 'height', 'width'], // Allow only the src attribute for img tags
  };


  useEffect(() => {
   fetchPosts(setPosts).then(() => {
      setLoading(false); 
    }); 
  }, []);

  return (
    <Wrapper>
      <Global
        styles={css`
          img {
            max-width:200px;
            max-height:200px;
          }
        `}
      />
      {loading ? ( 
          <PacmanLoader
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#F44034"
            cssOverride={override}
          />
      ) : (
        <List
          styles={css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            list-style: none;
          `}
        >
          {posts.map(post => (
            <ListItem
              styles={css`
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
                <Content
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.message, {
                    allowedTags, 
                    allowedAttributes,
                  }) }}
                />
              </Comment>

              <UserDetails>
                <SubHeader>{post.date}</SubHeader>
                <SubHeader><Link to={`/user/${post.postedBy}`}>{post.postedBy}</Link></SubHeader>
              </UserDetails>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
}

export default Post;

