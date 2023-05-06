import React from 'react'
import FourmPost from '../Components/user/FourmPost'
import Post from '../Components/user/Post'
import styled from '@emotion/styled'

const Header = styled.h1`
    color:#F44336;
    font-weight:900;
    font-size:1.7em;
    font-family:Roboto, sans-serif;
    padding:5px;
`

const Wrapper = styled.div`
    margin-bottom:25px;
`

function Fourms() {
    return (
        <div>
            <FourmPost/>

            <Wrapper>
                <Header>Latest Posts</Header>
                <hr></hr>

                <Post></Post>
                <Post></Post>
                <Post></Post>
            </Wrapper>
        </div>
    )
}

export default Fourms
