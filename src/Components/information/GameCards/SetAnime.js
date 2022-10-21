import React, { useState, useEffect } from 'react'
import SmallAnime from './SmallAnime';

function SetAnime() {
    const [animeList, setAnimeList] = useState([]);
    const animeTitle = [];
    const animeImage = [];
    const animeStart = [];
    const animeUrl = [];

    const GetAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(res => res.json());
    
        setAnimeList(temp.data.slice(0, 8));
      }

      useEffect(() => {
        GetAnime();

      }, []);

      animeList.map(anime => (
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
                        <SmallAnime anime={anime} key={anime.mal_id} />
                    </div>
                ))}
    </div>
  )
}

export default SetAnime