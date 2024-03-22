import React from 'react'
import FourmPost from '../Components/FourmPage/FourmPost'
import Post from '../Components/FourmPage/Post'
import styled from '@emotion/styled'
import LargeHeader from '../Components/Headers/LargeHeader'

const Wrapper = styled.div`
    margin-bottom:25px;
`

function Fourms() {
    return (
        <div>
            <FourmPost/>

            <Wrapper>
                <LargeHeader text="Latest Posts"/>
                <hr></hr>

                <Post></Post>
            </Wrapper>
        </div>
    )
}

export default Fourms
