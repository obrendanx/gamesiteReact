import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import { css } from '@emotion/css';

function FavouriteBtn({ handleClick, sm, favourited }) {
    let iconStyles = {
        fontSize: "1em",
        cursor: "pointer",
        color: favourited ? "#F33446" : "#fff", 
        marginRight: "5px",
        paddingTop: "2.5px"
    };

  return (
    <div>
        <button
        onClick={handleClick}
        className={css`
                font-size:1em;
                color:#F36644;
                height:35px;
                ${sm ? 'width: 75px;' : 'width:100px;'}
                padding:5px;
                border:none;
                font-weight:600;
                background:#252627;
                @media (max-width: 770px){
                  width:100%;
                }
        `}
        >
        <BsFillStarFill
            style={iconStyles}
            data-cy="favorite"
        />
        {favourited ? "Remove Favourite" : "Add to Favourites"}
        </button>
    </div>
  )
}

export default FavouriteBtn