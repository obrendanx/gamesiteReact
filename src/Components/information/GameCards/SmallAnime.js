import React from 'react'

function SmallAnime(props) {
    return (
        <div>
            <div className="text_box_small">
                {/* Card Image */}
                <img src={props.anime.images.jpg.image_url} alt="gaming" />
                <div className={'text_area ' + (props.colorscheme)}>
                    <header>
                        {/* Card Title */}
                        <h2><a href={props.anime.url} target="_blank">{props.anime.title_japanese}</a></h2>
                        {/* Current Status of Anime */}
                        <h2>Status: {props.anime.status}</h2>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default SmallAnime