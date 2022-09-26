import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'

function SmallAnime(props) {
    const [animeList, setAnimeList] = useState([]);
    const animeTitle = [];
    const animeImage = [];
    const animeStart = [];
    const animeUrl = [];

    const GetAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
            .then(res => res.json());
    
        setAnimeList(temp.top.slice(0, 8));
      }

      useEffect(() => {
        GetAnime();

      }, []);
      console.log(animeList);

      animeList.map(anime => (
        animeTitle.push(anime.title),
        animeImage.push(anime.image_url),
        animeStart.push(anime.start_date),
        animeUrl.push(anime.url)
      ));
      console.log(animeTitle);

    return (
        <div>
            <div className="text_box_small">
                <img src={animeImage[props.animeNo]} alt="gaming" />
                <div className={'text_area ' + (props.colorscheme)}>
                    <header>
                        <h2><a href={animeUrl[props.animeNo]} target="_blank">{animeTitle[props.animeNo]}</a></h2>
                        <h2>Start Date: {animeStart[props.animeNo]}</h2>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default SmallAnime