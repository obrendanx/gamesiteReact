import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Input from '../Form/Input'
import { AuthContext } from '../User/Auth/AuthContext';
import Submit from '../Form/Submit'
import axios from 'axios';

const AnimeCardCtn = styled.article`
  width:100%;
`

const Link = styled.a`
  text-decoration:none;
  color:#fff;
`

const Header = styled.h2`
  margin-top:10px;
`

const AnimeImage = styled.figure`
  border-radius:20px;
`

const AnimeContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`

const AnimeGroup = styled.div`
    width:40%;
    margin:4.16%;
    text-align:center;
    @media screen and (max-width: 770px){
        width:100%;
    }
`

function FavouriteCard({ favouriteList, user }) {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentSeason, setCurrentSeason] = useState(0);
  const [watching, setWatching] = useState(null)
  const { user: currentUser } = useContext(AuthContext);

  const handleClick = async (event, favourite) => {
    event.preventDefault();
    setWatching(currentEpisode > 0 || currentSeason > 0);

    try {
      await axios.put(
        `http://localhost:5000/app/updateanime/${currentUser.username}/${favourite._id}`,
        { currentEpisode, currentSeason }
      );
      // Handle success or update UI if needed
    } catch (error) {
      console.error('Error updating anime:', error);
    }
  };

  return (
    <AnimeContainer>
            {favouriteList.map((favourite) => (
                <AnimeGroup>
                    <AnimeCardCtn key={favourite._id}>
                    {/* Links to more information about anime (Covers entire card) */}
                    <Link href={favourite.animeUrl} target="_blank" rel="noreferrer">
                        {/* Image for card */}
                        <AnimeImage>
                        <img src={favourite.animeImgSrc} alt="" />
                        </AnimeImage>
                        {/* Title for anime card (in japanese) */}
                        <Header>{favourite.animeTitle}</Header>
                    </Link>
                    {currentUser.username !== user ? (
                      null
                    ) : 
                      <form onSubmit={(event) => handleClick(event, favourite)}>
                        <div>
                          <span>Current Episode: </span>
                          <Input 
                            placeholder="Current Episode: " 
                            type="number" 
                            value={currentEpisode}
                            onValueChange={setCurrentEpisode}
                          />
                          <span>Current Season: </span>
                          <Input 
                            placeholder="Current Season: " 
                            type="number" 
                            value={currentSeason}
                            onValueChange={setCurrentSeason}
                          />
                        </div>
                      </form>
                    }
                    <span>Season: {favourite.currentSeason}</span>
                    <span>Episode: {favourite.currentEpisode}</span>
                    { favourite.watching ? <span>Watching</span> : <span>Not Seen</span> }
                    <Submit/>
                    </AnimeCardCtn>
                </AnimeGroup>
            ))}
    </AnimeContainer>
  );
}

export default FavouriteCard