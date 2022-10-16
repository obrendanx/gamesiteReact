import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'

function SmallManga(props) {
    return (
        <div>
            <div className="text_box_small">
                {/* textcard image */}
                <img src={props.manga.images.jpg.image_url} alt="gaming" />
                <div className={'text_area ' + (props.colorscheme)}>
                    <header>
                        {/* textcards title with url */}
                        <h2><a href={props.manga.url} target="_blank">{props.manga.title_japanese}</a></h2>
                        {/* current status of manga */}
                        <h2>Status: {props.manga.status}</h2>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default SmallManga