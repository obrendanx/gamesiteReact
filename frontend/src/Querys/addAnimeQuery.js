import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from "react-toastify";

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export default function useAddAnime () {
  const queryClient = useQueryClient();

  return useMutation(
    async (newAnimeItem) => {
      try {
        const response = axios.post(`${animeUrl}/newanime`, newAnimeItem);

        toast.success("Anime added to favourites");
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
      onSuccess: () => {
        queryClient.invalidateQueries('userFavorites'); 
      },
      onError: (error) => {
        toast.error(
          `Error adding favourite: ${error.message}`,
        );
      },
    },
  );
};
