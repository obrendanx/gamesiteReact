import React, { useState, useEffect } from 'react'
import SmallAnime from './SmallAnime';
import styled from '@emotion/styled';

function SetAnime() {
    //State array variable to store all results from api
    const [animeList, setAnimeList] = useState([]);
    const animeTitle = [];
    const animeImage = [];
    const animeStart = [];
    const animeUrl = [];

    const GetAnime = async () => {
        //Fetches top anime
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(res => res.json());

        //Sets how many different anime to be shown
        //For this it will be 8
        setAnimeList(temp.data.slice(0, 8));
      }

      useEffect(() => {
        GetAnime();

      }, []);
      console.log(animeList);

      animeList.map(anime => (
        //mapping through fetch data to results values such as title and push to an array
        animeTitle.push(anime.title),
        animeImage.push(anime.image_url),
        animeStart.push(anime.start_date),
        animeUrl.push(anime.url)
      ));
      console.log(animeList);

      const AnimeCard = styled.div`
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        row-gap:1%;
        column-gap:1%;
        padding-left:2.5%;
        width:100%;
        div{
          width:23.5%;
          div{
            width:100%;
          }
        }
        @media (max-width: 770px){
          flex-direction:column;
          div{
            width:98%;
          }
        }
      `

  return (
    <AnimeCard>
        {animeList.map(anime => (
                    <div>
                        {/* Mapping the anime card with the number of results for the fetched data */}
                        <SmallAnime anime={anime} key={anime.mal_id} />
                    </div>
                ))}
    </AnimeCard>
  )
}

export default SetAnime