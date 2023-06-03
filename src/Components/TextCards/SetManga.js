import React, { useState, useEffect } from 'react'
import SmallManga from './SmallManga';
import styled from '@emotion/styled';

function SetManga() {
    const [mangaList, setMangaList] = useState([]);
    //arrays to store different api attrbiutes
    const mangaTitle = [];
    const mangaImage = [];
    const mangaStart = [];
    const mangaUrl = [];

        //fetching data from api
    const GetManga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/manga`)
            .then(res => res.json());
    
        setMangaList(temp.data.slice(0,16));
      }

      //updating the array with data fetched from api
      useEffect(() => {
        GetManga();

      }, []);

      //logging to console fetched data
      console.log(mangaList);

      //mapping through certain items of fetched data and pushing to selected arrays
      mangaList.map(manga => (
        mangaTitle.push(manga.title),
        mangaImage.push(manga.image_url),
        mangaStart.push(manga.start_date),
        mangaUrl.push(manga.url)
      ));

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
        {/* mapping data to each card used */}
        {mangaList.map(manga => (
                    <div>
                        <SmallManga manga={manga} key={manga.mal_id} />
                    </div>
                ))}
    </AnimeCard>
  )
}

export default SetManga