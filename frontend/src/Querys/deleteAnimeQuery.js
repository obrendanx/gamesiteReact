import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from "react-toastify";
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export default function useRemoveAnime () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({username, itemId}) => {
      try {
        const response = await axios.delete(`${animeUrl}/deleteanime?username=${username}&id=${itemId}`);
        
        if (response.status === 200) {
          toast.success("Anime removed from favourites");
          return response.data;
        } 
      } catch (error) {
        if (error.response.status === 404) {
          throw new Error(`User not found`);
        } else {
          console.log(error.response.status);
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
          `Error removing favourite: ${error.message}`
        );
      },
    },
  );
};