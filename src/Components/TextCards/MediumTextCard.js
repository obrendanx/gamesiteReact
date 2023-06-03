import React from 'react'
import styled from '@emotion/styled'
import Indicator from '../Misc/Indicator'

const TextBox = styled.div`
    height:295px;
    width:100%;
    margin-top:2.5%;
    position:relative;
    margin-bottom:2.5%;
    transition:0.7s;
`

const Image = styled.img`
    height:100%;
    width:100%;
    border-radius:5px;
    &:hover{
        opacity:0.8;
    }
`

const TextArea = styled.div`
    position:absolute;
    min-height:30%;
    width:100%;
    bottom:0;
    padding:2% 5% 2% 5%;
    transition:0.7s;
    margin:0;
    font-weight:900;
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
    background:rgba(0, 0, 0, 0.8);
    &:hover{
        background:rgba(0, 0, 0, 1)
    }
`

const Link = styled.a`
    color:#F44336;
`

const Header = styled.h2`
    margin-bottom:5px;
    text-transform:uppercase;
`

function MediumTextCard(props) {
    return (
        <div>
            <TextBox>
                {/* Card Image */}
                <Image src={props.imgName} alt="gaming" />
                <TextArea>
                    <Indicator></Indicator>
                    <header>
                        {/* Card Title */}
                        <Header>{props.imgTitle}</Header>
                    </header>
                    <p>
                    {/* Small Card Description */}
                    {props.imgText} <Link href={props.imgLink}>here</Link>
                    </p>
                </TextArea>
            </TextBox>
        </div>
    )
}

export default MediumTextCard