import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export default function useUpdateAnime () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({itemId, username, currentEpisode, currentSeason}) => {
      try {
        const response = axios.put( `${animeUrl}/updateanime?username=${username}&id=${itemId}`, { currentEpisode, currentSeason });

        toast.success("Anime updated successfully");
        return await response.data;
      } catch (error) {
        if(error.response.status === 404) {
          throw new Error(`User not found`);
        } else {
          throw new Error('An error has occurred');
        }
      }
    },
    {
      throwOnError: true,
      onMutate: (variables) => {
        const previousData = queryClient.getQueryData('userFavorites');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('userFavorites'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('userFavorites', previousData); 
        toast.error(
          `Error adding favourite: ${error.message}`,
        );
      },
    },
  );
};
