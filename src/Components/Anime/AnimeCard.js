import React from 'react'

function AnimeCard({anime}) {
  return (
    <div>
        <article className="anime_card">
            <a href={anime.url} target="_blank" rel="noreferrer">
                <figure className='anime_img'>
                    <img src={anime.images.jpg.image_url} alt="Anime Image" />
                </figure>
                <h2 className='anime_title'>{anime.title_japanese}</h2>
            </a>
        </article>
    </div>
  )
}

export default AnimeCard