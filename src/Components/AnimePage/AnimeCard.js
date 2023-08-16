import React, {useContext} from 'react'
import styled from '@emotion/styled'
import FavouriteBtn from '../Form/Buttons/FavouriteBtn'
import axios from 'axios'
import { AuthContext } from "../User/Auth/AuthContext";

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
  const { user } = useContext(AuthContext);
  const handleClick = async () => {
    try {
      const newAnimeItem = {
        username: user.username,
        title: anime.title_japanese,
        img: anime.images.jpg.image_url,
        url: anime.url,
      };

      // Send a POST request to your server to add the new anime item
      const response = await axios.post('http://localhost:5000/app/newanime', newAnimeItem);
      console.log('Anime added:', response.data);
    } catch (error) {
      console.error('Error adding anime:', error);
    }
  };

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
            <FavouriteBtn handleClick={handleClick}/>
        </AnimeCardCtn>
    </div>
  )
}

export default AnimeCard