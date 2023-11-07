import React, {useState, useContext} from 'react'
import { AuthContext } from '../User/Auth/AuthContext';
import config from '../../config';
import FavouriteCard from '../AnimePage/FavouriteCard';
import { css } from '@emotion/css';
import { useUserFavorites } from '../../Querys/showFavoritesQuery';

function FavoritesSide() {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const flex = true;
    const { data: userFavourites, refetch, isLoading } = useUserFavorites(user.username);

    const handleClick = () => {
        if(open){
            setOpen(false);
        } else{
            setOpen(true);
        }
    }

    if (isLoading) {
        return (
            <div>
                
            </div>
        );
    }

    return (
        <div>
            { !open ? 
                <div className={css`
                    position:fixed;
                    height:5vh;
                    width:50px;
                    left:0;
                    z-index:999;
                    top:15vh;
                    @media (max-width: 777px) {
                        display:none;
                    }
                `}>
                    <button 
                        onClick={handleClick}
                        className={css`
                            height:100%;
                            width:100%;
                            border:none;
                            font-size:1.5em;
                            opacity:0.6;
                            border-radius:0px 10px 10px 0px;
                            &:hover{
                                opacity:1;
                            }
                        `}
                    >
                        &gt;
                    </button>
                </div>
            : 
                <div className={css`
                    position:fixed;
                    width:25vw;
                    height:100%;
                    z-index:999;
                    left:0;
                    background:#1C1C1C;
                    overflow-y:scroll;
                    top:0;
                    @media (max-width: 1100px) {
                        width:30vw;
                    }
                    @media (max-width: 900px) {
                        width:35vw;
                    }

                    &::-webkit-scrollbar {
                        width: 8px; /* width of vertical scrollbar */
                    }

                    &::-webkit-scrollbar-track {
                        background-color: #fff;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: #F44034;
                        border-radius:3px;
                    }

                    &::-webkit-scrollbar-thumb:hover {
                        background-color: #1C1C1C;
                    }
                `}>
                    <h3 className={css`
                        text-align:center;
                        color:#fff;
                        margin-top:5px;
                        font-family: 'Oswald', sans-serif;
                    `}>FAVOURITES</h3>
                    <FavouriteCard user={user.username} favouriteList={userFavourites} key={userFavourites._id} flex={flex}/> 
                    <div className={css`
                        position:fixed;
                        height:5vh;
                        width:50px;
                        left:25vw;
                        z-index:999;
                        top:15vh;
                        @media (max-width: 1100px) {
                            left:30vw;
                        }
                        @media (max-width: 900px) {
                            left:35vw;
                        }
                    `}>
                        <button 
                            onClick={handleClick}
                            className={css`
                                height:100%;
                                width:100%;
                                border:none;
                                font-size:1.5em;
                                opacity:0.6;
                                border-radius:0px 10px 10px 0px;
                                &:hover{
                                    opacity:1;
                                }
                            `}
                        >
                            &lt;
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default FavoritesSide