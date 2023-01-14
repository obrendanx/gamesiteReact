import React, { useState, useEffect } from 'react'

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

  return (
    <div>
      <div className="banner" style={
        {
          backgroundImage: `linear-gradient(rgba(204,204,204,.2), rgba(204,204,204,.3)), url(${animeImage[count]})`,
        }
      }>
        <button className="buttonLeft banner_button" onClick={countMinus}>&lt;</button>
        <button className="buttonRight banner_button" onClick={countAdd}>&gt;</button>
        <div className="banner_info">
          <h2 className="banner_title"><a href={animeUrl}>{animeTitle[count]}</a></h2>
          <p className="banner_text">
            {animeSynopsis[count]} ...<a href={animeUrl[count]}> Learn More</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
