import React from 'react'

function Sidebar({topAnime}) {
  return (
    <div className='anime_side'>
        <aside>
            <nav className='anime_side_nav'>
                <h3 className='anime_side_head'>Top Anime:</h3>
                <ul>
                  {/* Maps the Top anime for the sidebar */}
                  {topAnime.map(anime => (
                    <li><a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer" className='anime_top_link'>{anime.title}</a></li>
                  ))}
                </ul>
                
            </nav>
        </aside>
    </div>
  )
}

export default Sidebar