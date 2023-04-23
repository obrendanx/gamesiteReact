import React from 'react'
import styled from '@emotion/styled';

const TextBox = styled.div`
    height:295px;
    width:100%;
    position:relative;
    transition:0.7s;
    margin:2.5% 0 4% 0;
    @media (max-width: 770px){
        padding:5;
        width:100%;
    }
`

const Image = styled.img`
    height:100%;
    width:100%;
    broder-radius:5px;
    &:hover{
        opacity:0.8;
    }
`

const TextArea = styled.div`
    position:absolute;
    height:25%;
    width:100%;
    bottom:0;
    padding:5%;
    transition:0.7s;
    margin:0;
    border-radius:0px 0px 5px 5px;
    font-weight:900;
    font-size:0.5em;
    font-family:Roboto, sans-serif;
    color:#fff;
    background:rgba(0, 0, 0, 0.5);
`

const Link = styled.a`
    color:#fff;
`

const Header = styled.h2`
    mrgin-bottom:5px;
    text-transform:uppercase;
    &:hover{
        text-decoration:underline;
    }
`

function SmallAnime(props) {
    return (
        <div>
            <TextBox>
                {/* Card Image */}
                <Image src={props.anime.images.jpg.image_url} alt="gaming" />
                <TextArea>
                    <header>
                        {/* Card Title */}
                        <Header><Link href={props.anime.url} target="_blank">{props.anime.title_japanese}</Link></Header>
                        {/* Current Status of Anime */}
                        <Header>Status: {props.anime.status}</Header>
                    </header>
                </TextArea>
            </TextBox>
        </div>
    )
}

export default SmallAnime