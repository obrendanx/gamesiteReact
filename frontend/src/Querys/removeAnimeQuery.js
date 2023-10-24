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
      // You can optionally store the previous user favorites data before the mutation
      const previousData = queryClient.getQueryData('userFavorites');
      return previousData;
    },
    onError: (error, variables, previousData) => {
      // Rollback to the previous user favorites data on error
      queryClient.setQueryData('userFavorites', previousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('userFavorites'); // Invalidate the userFavorites query
    },
  });
};