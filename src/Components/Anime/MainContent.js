import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
  return (
    <div>
        <main>
            <div>
                {/* 
                    Input for the anime search bar 
                    Search bar is used to send a query to the api 
                    which sends back a set of results
                */}
                <form onSubmit={props.HandleSearch} className='anime_search'>
                    <input 
                        type="search" 
                        placeholder="Search" 
                        required value={props.search} 
                        onChange={e => props.SetSearch(e.target.value)} 
                    />
                </form>
            </div>
            <div className='anime_container'>
                {props.animeList.map(anime => (
                    <div className='anime_group'>
                        {/* Results of query search stored in the prop 'anime' for the anime card to use */}
                        <AnimeCard anime={anime} key={anime.mal_id} />
                    </div>
                ))}
            </div>
        </main>
    </div>
  )
}

export default MainContent