import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export const addAnime = (newAnimeItem) => {
  return axios.post(`${animeUrl}/newanime`, newAnimeItem)
    .then((response) => response.data);
};

export const useAddAnime = () => {
  const queryClient = useQueryClient();

  return useMutation((newAnimeItem) => addAnime(newAnimeItem), {
    onSuccess: () => {
      queryClient.invalidateQueries('userFavorites'); // Invalidate the userFavorites query
    },
  });
};