import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'

function SmallManga(props) {
    const [mangaList, setMangaList] = useState([]);
    const mangaTitle = [];
    const mangaImage = [];
    const mangaStart = [];
    const mangaUrl = [];

    const GetManga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
            .then(res => res.json());
    
        setMangaList(temp.top.slice(0, 15));
      }

      useEffect(() => {
        GetManga();

      }, []);
      console.log(mangaList);

      mangaList.map(manga => (
        mangaTitle.push(manga.title),
        mangaImage.push(manga.image_url),
        mangaStart.push(manga.start_date),
        mangaUrl.push(manga.url)
      ));

    return (
        <div>
            <div className="text_box_small">
                <img src={mangaImage[props.mangaNo]} alt="gaming" />
                <div className={'text_area ' + (props.colorscheme)}>
                    <header>
                        <h2><a href={mangaUrl[props.mangaNo]} target="_blank">{mangaTitle[props.mangaNo]}</a></h2>
                        <h2>Start Date: {mangaStart[props.mangaNo]}</h2>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default SmallManga