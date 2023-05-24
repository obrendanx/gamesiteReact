import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    min-height:250px;
    width:85%;
    background:#1C1C1C;
    padding:20px;
    margin:auto;
    border-radius:10px;
    margin-top:20px;
    margin-bottom:20px;
`

const Subject = styled.div`
    height:50px;
    width:100%;
`

const Header = styled.h2`
    height:100%;
    color:#F44336;
    font-size:1.3em;
    padding:5px;
`

const Comment = styled.div`
    min-height:150px;
    margin:10px;
    width:100%;
`

const Content = styled.p`
    color:#fff;
    font-size:1em;
    padding:5px;
`

const UserDetails = styled.div`
    height:50px;
    width:100%;
    padding:10px;
`

const SubHeader = styled.h3`
    font-size:0.7em;
    color:#fff;
`

function Post() {
  return (
    <Wrapper>
        <Subject>
            <Header>
                Subject Here
            </Header>
        </Subject>

        <Comment>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis felis in orci vestibulum, vel molestie nibh interdum. Vivamus posuere ut odio at rhoncus. Nunc congue purus sed diam ullamcorper pharetra. Cras ullamcorper vulputate efficitur. Suspendisse et vestibulum enim. Nam pretium fermentum orci. Aliquam venenatis a urna non scelerisque. Cras scelerisque sapien sed turpis auctor scelerisque. Fusce eu finibus ex.
            </Content>
        </Comment>

        <UserDetails>
            <SubHeader>Posted: 24/07/2000</SubHeader>
            <SubHeader>By: Brendan Ewen</SubHeader>
        </UserDetails>
    </Wrapper>
  )
}

export default Post