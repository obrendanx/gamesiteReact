import React, { useState, useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { css } from '@emotion/css';

function FavouriteBtn({ handleClick, sm, favourited }) {
    const [isFavourited, setIsFavourited] = useState(favourited);

    let iconStyles = {
        fontSize: "1em",
        cursor: "pointer",
        color: isFavourited ? "#F33446" : "#fff",
        marginRight: "5px",
        paddingTop: "2.5px"
    };

    const handleButtonClick = () => {
        setIsFavourited(!isFavourited); // Toggle the isFavourited state
        handleClick();
    };

    useEffect(() => {
        setIsFavourited(favourited); 
    }, [favourited]);

    return (
        <div>
            <button
                onClick={handleButtonClick}
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
                data-cy="favorite"
            >
                <BsFillStarFill
                    style={iconStyles}
                />
                {isFavourited ? "Remove Favourite" : "Add to Favourites"}
            </button>
        </div>
    );
}

export default FavouriteBtn;