import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'

const AnimeCardCtn = styled.article`
  width:100%;
`

const Link = styled.a`
  text-decoration:none;
  color:#fff;
`

const Header = styled.h2`
  margin-top:10px;
`

const AnimeImage = styled.figure`
  border-radius:20px;
`

const AnimeContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`

const AnimeGroup = styled.div`
    width:40%;
    margin:4.16%;
    text-align:center;
    @media screen and (max-width: 770px){
        width:100%;
    }
`

function FavouriteCard({ favouriteList }) {
  return (
    <AnimeContainer>
            {favouriteList.map((favourite) => (
                <AnimeGroup>
                    <AnimeCardCtn key={favourite._id}>
                    {/* Links to more information about anime (Covers entire card) */}
                    <Link href={favourite.animeUrl} target="_blank" rel="noreferrer">
                        {/* Image for card */}
                        <AnimeImage>
                        <img src={favourite.animeImgSrc} alt="" />
                        </AnimeImage>
                        {/* Title for anime card (in japanese) */}
                        <Header>{favourite.animeTitle}</Header>
                    </Link>
                    </AnimeCardCtn>
                </AnimeGroup>
            ))}
    </AnimeContainer>
  );
}

export default FavouriteCard