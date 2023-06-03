import React from 'react'
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

function AnimeCard({anime}) {
  return (
    <div>
        <AnimeCardCtn>
            {/* Links to more information about anime (Covers entire card) */}
            <Link href={anime.url} target="_blank" rel="noreferrer">
                {/* Image for card */}
                <AnimeImage>
                    <img src={anime.images.jpg.image_url} alt="" />
                </AnimeImage>
                {/* Title for anime card (in japanese) */}
                <Header>{anime.title_japanese}</Header>
            </Link>
        </AnimeCardCtn>
    </div>
  )
}

export default AnimeCard