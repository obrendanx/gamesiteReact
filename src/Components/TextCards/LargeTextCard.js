import React from 'react'
import styled from '@emotion/styled'

const TextBox = styled.div`
    height:600px;
    width:100%;
    margin-top:2.5%;
    margin-bottom:2.5%;
    position:relative;
    transition:0.7s;
    border-radius:5px;
`

const Image = styled.img`
    height:70%;
    width:100%;
    border-radius:5px;
    &:hover{
        opacity:0.8;
    }
`

const TextArea = styled.div`
    position:absolute;
    height:30%;
    width:97%;
    bottom:0;
    padding:5%;
    transition:0.7s;
    margin:0;
    margin-left:1.75%;
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
    background:rgba(0, 0, 0, 0.5);
`

const Link = styled.a`
    color:#F44336;
`

const Header = styled.h2`
    margin-bottom:5px;
    text-transform:uppercase;
`

const Text = styled.p`
    font-size:1.3em;
`

const Indicator = styled.div`
    background:rgb(114, 112, 112);
    height:10px;
    width:30px;
    transition:1s;
    margin-bottom:5px;
    &:hover{
        background:rgb(245, 242, 242);
    }
`

function LargeTextCard(props) {
    return (
        <div>
            <TextBox>
                {/* Card Image */}
                <Image src={props.imgName} alt="gaming" />
                <TextArea id="text_area">
                    <Indicator></Indicator>
                    <header>
                        {/* Card Title */}
                        <Header>{props.imgTitle}</Header>
                    </header>
                    <Text>
                    {/* Small Description of Card */}
                    {props.imgText} <Link href={props.imgLink}>here</Link>
                    </Text>
                </TextArea>
            </TextBox>
        </div>
    )
}

export default LargeTextCard
