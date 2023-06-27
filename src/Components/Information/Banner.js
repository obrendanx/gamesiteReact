import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import ArrowBtn from '../Form/Buttons/ArrowBtn'

function Banner() {
//State array variable to store all results from api
const [animeList, setAnimeList] = useState([]);
const [count, setCount] = useState(0);
const animeTitle = [];
const animeImage = [];
const animeUrl = [];
const animeSynopsis = [];

const GetAnime = async () => {
    //Fetches top anime
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(res => res.json());

    //Sets how many different anime to be shown
    //For this it will be 8
    setAnimeList(temp.data.slice(0, 5));
  }


  useEffect(() => {
    GetAnime();

    const timeout = setTimeout(() => {
      //adds one to counter to change image
    if(count < 4){
      setCount(count + 1);
    }else{
      //resets counter if becomes greater than 4 (max number of images)
      setCount(0);
    }
    //sets timer for 10 seconds
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  //Buttons do work but if clicked to many times to many requests made

  //function for > to go to next image
  function countAdd() {
    if(count === 3){
      setCount(0)
    }else{
      setCount(count + 1)
    }
  }

  //function for < to go to previous image
  function countMinus() {
    if(count === 0){
      setCount(3)
    }else{
      setCount(count - 1)
    }
  }

  animeList.forEach((anime) => {
    animeImage.push(anime.images.webp.large_image_url);
    animeTitle.push(anime.title_japanese);
    animeUrl.push(anime.url);
    animeSynopsis.push(anime.synopsis.slice(0, 525));
  });

  const Banner = styled.div`
    background-repeat:no-repeat;
    background-position:center;
    background-size:100% 100%;
    height:90vh;
    width:100%;
    position:relative;
  `

  const BannerInfo = styled.div`
    position:relative;
    background:rgba(0, 0, 0, 0.6);
    border-radius:20px;
    min-height:15%;
    width:95%;
    margin:0 0 2.5% 2.5%;
    padding:2.5% 2.5% 2.5% 2.5%;
    font-size:1.3em;
    font-family:Roboto, sans-serif;
    color:#fff;
    top:70%;
    @media (max-width: 770px){
      display:none;
      font-size:0.7em;
    }
    @media (max-width: 1600px){
      width:95% !important;
      font-size:1.3em !important;
    }
    @media (max-width: 1200px){
      font-size:1.1em !important;
    }
  `

  const BannerTitle = styled.h2`
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
  `

  const BannerText = styled.p`
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
  `

  return (
    <div>
      <Banner style={
        {
          backgroundImage: `linear-gradient(rgba(204,204,204,.2), rgba(204,204,204,.3)), url(${animeImage[count]})`,
        }
      }>
        <ArrowBtn text='&lt;' left top="45%;" handleClick={countMinus}></ArrowBtn>
        <ArrowBtn text='&gt;' top="45%" handleClick={countAdd}></ArrowBtn>
        <BannerInfo>
          <div><BannerTitle href={animeUrl}>{animeTitle[count]}</BannerTitle></div>
          <div>
            {animeSynopsis[count]} ...<BannerText href={animeUrl[count]}> Learn More </BannerText>
          </div>
        </BannerInfo>
      </Banner>
    </div>
  )
}

export default Banner
