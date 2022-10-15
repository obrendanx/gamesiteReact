import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'

function SmallAnime(props, {anime}) {
    return (
        <div>
            <div className="text_box_small">
                <img src={anime.image_url} alt="gaming" />
                <div className={'text_area ' + (props.colorscheme)}>
                    <header>
                        <h2><a href={anime.url} target="_blank">{anime.title}</a></h2>
                        <h2>Start Date: {anime.start_date}</h2>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default SmallAnime