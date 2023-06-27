import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import axios from 'axios';
import MediumHeader from '../Headers/MediumHeader';

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

async function fetchPosts(setPosts) {
  try {
    const res = await axios.get('http://localhost:5000/app/showposts');
    setPosts(res.data.data);
  } catch (err) {
    console.log(err);
  }
}

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []); // Removed the unnecessary dependency array

  console.log(posts);

  return (
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
              <SubHeader>{post.postedBy}</SubHeader>
            </UserDetails>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default Post;
