import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Input from '../Form/Input'
import { AuthContext } from '../User/Auth/AuthContext';
import Submit from '../Form/Submit'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Label from '../Form/Label'

const AnimeCardCtn = styled.article`
  width:100%;
  height:300px;
`

const Link = styled.a`
  text-decoration:none;
  color:#fff;
`

const Header = styled.h2`
  margin-top:10px;
  font-size:1em;
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

const TextCont = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-bottom:10px;
`

const Green = styled.div`
    height:20px;
    width:20px;
    border-radius:50%;
    background:green;
    margin-left:5px;
`

const Red = styled.div`
    height:20px;
    width:20px;
    border-radius:50%;
    background:red;
    margin-left:5px;
`

const Watching = styled.span`
    width:100%;
    color: ${({ watching }) => (watching ? "green" : "red")};
    display:flex;
    flex-direction:row;
    justify-content:center;
  `; 

function FavouriteCard({ favouriteList, user }) {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentSeason, setCurrentSeason] = useState(0);
  const [watching, setWatching] = useState(false)
  const { user: currentUser } = useContext(AuthContext);

  const handleClick = async (event, favourite) => {
    event.preventDefault();

    try {
      await axios.put(
        `http://localhost:5003/updateanime?username=${currentUser.username}?id=${favourite._id}`,
        { currentEpisode, currentSeason }
      );
      toast.success("Anime updated successfully!");
    } catch (error) {
      console.error('Error updating anime:', error);
      toast.error("Error updating anime!")
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
                    </AnimeCardCtn>
                    {currentUser.username !== user ? (
                      null
                    ) : 
                      <form onSubmit={(event) => handleClick(event, favourite)}>
                          <Label text="Current Episode: " primary />
                          <Input 
                            placeholder={"Current Episode: " + favourite.currentEpisode} 
                            type="number" 
                            defaultValue={favourite.currentEpisode}
                            onValueChange={setCurrentEpisode}
                          />
                          <Label text="Current Season: " primary/>
                          <Input 
                            placeholder={"Current Season: " + favourite.currentSeason}
                            type="number" 
                            defaultValue={favourite.currentSeason}
                            onValueChange={setCurrentSeason}
                          />
                          <Submit/>
                      </form>
                    }
                    <div>
                      <TextCont>
                        <Label text={"Season: " + favourite.currentSeason}/>
                        <Label text={"Episode: " + favourite.currentEpisode}/><br/>
                      </TextCont>
                      <Watching watching={favourite.watching}>
                        {favourite.watching ? "Watching" : "Not Seen"}
                        {favourite.watching ? <Green/> : <Red/>}
                      </Watching>
                    </div>
                </AnimeGroup>
            ))}
            <ToastContainer/>
    </AnimeContainer>
  );
}

export default FavouriteCard