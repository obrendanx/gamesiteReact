import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Anime/Sidebar.js'
import MainContent from '../Components/Anime/MainContent'

function AnimeSearch() {
  //States to store the search contents
  //the top anime
  //and a list of different anime
  const [animeList, setAnimeList] = useState([]);
  const [topAnime,setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

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
  console.log(topAnime);
  console.log(animeList);


  return (
    <div>
        <h1 className='anime_search_title'>Search <strong>Anime</strong></h1>
        <div className='anime_main_container'>
            <div className='con_side'>
                {/* Pushes TopAnime results to the sidebar components */}
                <Sidebar topAnime={topAnime} />
            </div>
            <div className='con_main'>
                {/* Pushes search query results to the main anime card component */}
                <MainContent HandleSearch={HandleSearch} search={search} SetSearch={setSearch} animeList={animeList} />
            </div>
        </div>
    </div>
  )
}

export default AnimeSearch