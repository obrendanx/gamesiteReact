import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';

function Banner() {
//State array variable to store all results from api
const [animeList, setAnimeList] = useState([]);
const [count, setCount] = useState(0);
const animeTitle = [];
const animeImage = [];
const animeStart = [];
const animeUrl = [];
const animeSynopsis = [];

const GetAnime = async () => {
    //Fetches top anime
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(res => res.json());

    //Sets how many different anime to be shown
    //For this it will be 8
    console.log(temp.data);
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
    if(count == 3){
      setCount(0)
    }else{
      setCount(count + 1)
    }
  }

  //function for < to go to previous image
  function countMinus() {
    if(count == 0){
      setCount(3)
    }else{
      setCount(count - 1)
    }
  }
  console.log(count);

  animeList.map(anime => (
    //mapping through fetch data to results values such as title and push to an array
    animeImage.push(anime.images.webp.large_image_url),
    animeTitle.push(anime.title_japanese),
    animeUrl.push(anime.url),
    animeSynopsis.push(anime.synopsis.slice(0, 525))
  ));

  const Banner = styled.div`
    background-repeat:no-repeat;
    background-position:center;
    background-size:100% 100%;
    height:90vh;
    width:100%;
    position:relative;
  `

  const  ButtonLeft = styled.button`
    font-size:1em;
    font-family:Roboto, sans-serif;
    color:#fff;
    position:absolute;
    top:45%;
    margin:0 1.5% 0 1.5%;
    border:none;
    border-radius:50%;
    height:8.5%;
    width:5%;
    background:rgba(0, 0, 0, 0.6); 
  `

  const ButtonRight = styled.button`
    font-size:1em;
    font-family:Roboto, sans-serif;
    color:#fff;
    position:absolute;
    top:45%;
    margin:0 1.5% 0 1.5%;
    border:none;
    border-radius:50%;
    height:8.5%;
    width:5%;
    background:rgba(0, 0, 0, 0.6);
    right:0;
  `

  const BannerInfo = styled.div`
    position:relative;
    background:rgba(0, 0, 0, 0.6);
    border-radius:20px;
    height:30%;
    width:95%;
    top:67.5%;
    margin:0 0 2.5% 2.5%;
    padding:1% 2.5% 2.5% 2.5%;
    font-size:1em;
    font-family:Roboto, sans-serif;
    color:#fff;
    @media (max-width: 770px){
      display:none;
      font-size:0.7em;
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
        <ButtonLeft onClick={countMinus}>&lt;</ButtonLeft>
        <ButtonRight onClick={countAdd}>&gt;</ButtonRight>
        <BannerInfo>
          <div><BannerTitle href={animeUrl}>{animeTitle[count]}</BannerTitle></div>
          <div>
            {animeSynopsis[count]} ...<BannerText href={animeUrl[count]}> Learn More</BannerText>
          </div>
        </BannerInfo>
      </Banner>
    </div>
  )
}

export default Banner
