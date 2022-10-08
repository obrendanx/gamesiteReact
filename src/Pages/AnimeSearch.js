import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Anime/Sidebar.js'
import MainContent from '../Components/Anime/MainContent'

function AnimeSearch() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime,setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(res => res.json());

    setTopAnime(temp.data);
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/search/anime?q=${query}&order_by=title&sort=acs&limit=10`)
        .then(res => res.json());

    setAnimeList(temp.results);
  }

  useEffect(() => {
    GetTopAnime();

  }, []);
  console.log(topAnime);


  return (
    <div>
        <h1 className='anime_search_title'>Search <strong>Anime</strong></h1>
        <div className='anime_main_container'>
            <div className='con_side'>
                <Sidebar topAnime={topAnime} />
            </div>
            <div className='con_main'>
                <MainContent HandleSearch={HandleSearch} search={search} SetSearch={setSearch} animeList={animeList} />
            </div>
        </div>
    </div>
  )
}

export default AnimeSearch