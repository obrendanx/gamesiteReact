import React from 'react'

function AnimeCard({anime}) {
  return (
    <div>
        <article className="anime_card">
            {/* Links to more information about anime (Covers entire card) */}
            <a href={anime.url} target="_blank" rel="noreferrer">
                {/* Image for card */}
                <figure className='anime_img'>
                    <img src={anime.images.jpg.image_url} alt="Anime Image" />
                </figure>
                {/* Title for anime card (in japanese) */}
                <h2 className='anime_title'>{anime.title_japanese}</h2>
            </a>
        </article>
    </div>
  )
}

export default AnimeCard