import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export const removeAnime = (itemId, username) => {
  return axios.delete(`${animeUrl}/deleteanime?username=${username}&id=${itemId}`)
    .then((response) => response.data);
};

export const useRemoveAnime = () => {
  const queryClient = useQueryClient();

  return useMutation(({ itemId, username }) => removeAnime(itemId, username), {
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