import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
  return (
    <div>
        <main>
            <div>
                <form onSubmit={props.HandleSearch} className='anime_search'>
                    <input type="search" placeholder="Search" required value={props.search} onChange={e => props.SetSearch(e.target.value)} />
                </form>
            </div>
            <div className='anime_container'>
                {props.animeList.map(anime => (
                    <div className='anime_group'>
                        <AnimeCard anime={anime} key={anime.mal_id} />
                    </div>
                ))}
            </div>
        </main>
    </div>
  )
}

export default MainContent