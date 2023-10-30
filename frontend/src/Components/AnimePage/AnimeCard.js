import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import FavouriteBtn from '../Form/Buttons/FavouriteBtn'
import { AuthContext } from "../User/Auth/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserFavorites } from '../../Querys/userFavoritesQuery';
import { useAddAnime } from '../../Querys/addAnimeQuery';
import { useRemoveAnime } from '../../Querys/removeAnimeQuery';

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

function AnimeCard({ anime }) {
  const { user, isLoggedIn } = useContext(AuthContext);
  const { data: userFavourites, isLoading, isError, refetch } = useUserFavorites(user.username);

  const addAnimeMutation = useAddAnime();
  const removeAnimeMutation = useRemoveAnime();

  const isAlreadyFavorite = userFavourites
    ? userFavourites.some((item) => item.animeTitle === anime.title_japanese)
    : false;

  const handleClick = async () => {
    try {
      if (isLoggedIn) {
        const newAnimeItem = {
          username: user.username,
          title: anime.title_japanese,
          img: anime.images.jpg.image_url,
          url: anime.url,
        };
        console.log(userFavourites);
        if (isAlreadyFavorite) {
          console.log(userFavourites);
          // Anime already exists, remove it
          const removedItem = userFavourites.find((item) => item.animeTitle === newAnimeItem.title);
          if (removedItem) {
            await removeAnimeMutation.mutateAsync({
              itemId: removedItem._id,
              username: user.username,
            });
            toast.success('Anime removed from favorites');
          }
        } else {
          // Anime doesn't exist, add it
          console.log(userFavourites);
          const response = await addAnimeMutation.mutateAsync(newAnimeItem);
          toast.success('Anime added to favorites');
        }
        refetch();
      } else {
        toast.error('You must be logged in to favorite an anime');
      }
    } catch (error) {
      console.error('Error adding/removing anime:', error);
    }
  };

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user]);

  return (
    <div>
      <AnimeCardCtn key={anime.mal_id}>
        {/* Links to more information about anime (Covers entire card) */}
        <Link href={anime.url} target="_blank" rel="noreferrer">
          {/* Image for card */}
          <AnimeImage>
            <img src={anime.images.jpg.image_url} alt="" />
          </AnimeImage>
          {/* Title for anime card (in Japanese) */}
          <Header>{anime.title_japanese}</Header>
        </Link>
        <FavouriteBtn favourited={isAlreadyFavorite} handleClick={handleClick} />
        <ToastContainer />
      </AnimeCardCtn>
    </div>
  );
}

export default AnimeCard;