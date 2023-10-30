import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export const updateAnime = (itemId, username, currentEpisode, currentSeason) => {
  return axios.put( `${animeUrl}/updateanime?username=${username}&id=${itemId}`, { currentEpisode, currentSeason })
    .then((response) => response.data);
};

export const useUpdateAnime = () => {
  const queryClient = useQueryClient();

  return useMutation(({ itemId, username, currentEpisode, currentSeason }) => updateAnime(itemId, username, currentEpisode, currentSeason), {
    onMutate: (variables) => {
      const previousData = queryClient.getQueryData('userFavorites');
      return previousData;
    },
    onError: (error, variables, previousData) => {
      queryClient.setQueryData('userFavorites', previousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('userFavorites'); 
    },
  });
};