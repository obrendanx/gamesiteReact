import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/AnimePage/Sidebar.js'
import MainContent from '../Components/AnimePage/MainContent'
import { css } from '@emotion/css';
import LargeHeader from '../Components/Headers/LargeHeader'

function AnimeSearch() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime,setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const GetTopAnime = async () => {
    //Fetches current top anime
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(res => res.json());

    setTopAnime(temp.data);
  }

  const HandleSearch = e => {
    //prevents page from refreshing
    e.preventDefault();
    //updates FetchAnime state with results
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    //Fetchs anime based on what the user puts in the search bar
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        .then(res => res.json());

    //updates setAnimeList state with results
    setAnimeList(temp.data);
  }

  useEffect(() => {
    GetTopAnime();
  }, []);


  return (
    <div className={css`
      @media screen and (max-width: 770px){
        padding:20px
      }
    `}>
      <LargeHeader text='Search Anime'></LargeHeader>
      <div
        className={css`
          display:flex;
          flex-direction:row;
          width:100%;
          margin-top:20px;
          margin-bottom:20px;
          margin-left:5%;
          @media screen and (max-width: 1200px){
            margin-left:0;
          }
        `}
      >
        <div className={css`
          width:30%;
          @media screen and (max-width: 1200px){
            display:none;
          }
        `}>
          <Sidebar topAnime={topAnime} />
        </div>
        <div className={css`
          width:55%;
          margin-left:2.5%;
          @media screen and (max-width: 1200px){
            width:100%;
            margin-left:0;
          }
        `}>
          <MainContent
            HandleSearch={HandleSearch}
            search={search}
            setSearch={handleSearchChange}
            animeList={animeList}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimeSearch;