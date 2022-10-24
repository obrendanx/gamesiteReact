import React, { useState, useEffect } from 'react'
import SmallAnime from './SmallAnime';

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
  return (
    <div className="anime_sm_card">
        {animeList.map(anime => (
                    <div>
                        {/* Mapping the anime card with the number of results for the fetched data */}
                        <SmallAnime anime={anime} key={anime.mal_id} />
                    </div>
                ))}
    </div>
  )
}

export default SetAnime