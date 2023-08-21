import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import FavouriteBtn from '../Form/Buttons/FavouriteBtn'
import axios from 'axios'
import { AuthContext } from "../User/Auth/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnimeCardCtn = styled.article`
  width:100%;
`

const Link = styled.a`
  text-decoration:none;
  color:#fff;
`

const Header = styled.h2`
  margin-top:10px;
  font-size:1em;
`

const AnimeImage = styled.figure`
  border-radius:20px;
`

function AnimeCard({anime}) {
  const { user } = useContext(AuthContext);
  const [userFavourites, setUserFavourites] = useState([]);
  const [isAlreadyFavorite, setIsAlreadyFavorite] = useState(false);

  // Fetch the user's favorite anime items on component mount
  useEffect(() => {
    const fetchUserFavourites = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/app/userfavourites/${user.username}`
        );
        setUserFavourites(response.data);
      } catch (error) {
        console.error('Error fetching user favourites:', error);
      }
    };

    const checkIsAlreadyFavorite = () => {
      const isFavourite = userFavourites.some(
        (item) => item.animeTitle === anime.title_japanese
      );
      setIsAlreadyFavorite(isFavourite);
    };

    if (user) {
      fetchUserFavourites();
      checkIsAlreadyFavorite();
    }
  }, [user, anime.title_japanese, userFavourites]);

  const handleClick = async () => {
    try {
      const newAnimeItem = {
        username: user.username,
        title: anime.title_japanese,
        img: anime.images.jpg.image_url,
        url: anime.url,
      };

      const isAlreadyFavorite = userFavourites.some(
        (item) => item.animeTitle === newAnimeItem.title
      );

      if (isAlreadyFavorite) {
        // Anime already exists, remove it
        const removedItemId = userFavourites.find(
          (item) => item.animeTitle === newAnimeItem.title
        )._id;
        await removeAnimeItem(removedItemId);
        setUserFavourites((prevFavourites) =>
          prevFavourites.filter((item) => item._id !== removedItemId)
        );
        toast.error('Anime removed from favorites');
      } else {
        // Anime doesn't exist, add it
        const response = await axios.post(
          'http://localhost:5000/app/newanime',
          newAnimeItem
        );
        console.log('Anime added:', response.data);
        setUserFavourites((prevFavourites) => [...prevFavourites, response.data]);
        toast.success('Anime added to favorites');
      }
    } catch (error) {
      console.error('Error adding/removing anime:', error);
    }
  };

  const removeAnimeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/app/removeanime/${user.username}/${itemId}`);
      console.log('Anime removed:', itemId);
    } catch (error) {
      console.error('Error removing anime:', error);
    }
  };

  return (
    <div>
        <AnimeCardCtn key={anime.mal_id}>
            {/* Links to more information about anime (Covers entire card) */}
            <Link href={anime.url} target="_blank" rel="noreferrer">
                {/* Image for card */}
                <AnimeImage>
                    <img src={anime.images.jpg.image_url} alt="" />
                </AnimeImage>
                {/* Title for anime card (in japanese) */}
                <Header>{anime.title_japanese}</Header>
            </Link>
            <FavouriteBtn favourited={isAlreadyFavorite} handleClick={handleClick}/>
            <ToastContainer/>
        </AnimeCardCtn>
    </div>
  )
}

export default AnimeCard