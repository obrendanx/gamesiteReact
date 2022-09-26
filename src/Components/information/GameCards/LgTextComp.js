import React, {useEffect, useState} from 'react'
const axios = require("axios");
    // var colours = ['#3968ff', '#10ff74', '#ceff12'];
    // var random_colour = colours[Math.floor(Math.random() * colours.length)];
    // window.onload = function(){
    //     document.getElementById("text_area").onmouseenter = function(){
    //         this.style.color = random_colour;
    //     } 
    //     document.getElementById("text_area").onmouseleave = function(){
    //         this.style.color = "#fff";
    //     } 
    // }
function LgTextComp(props) {
    return (
        <div>
            <div className="text_box">
                <img src={props.imgName} alt="gaming" />
                <div className="text_area" id="text_area">
                    <div class="hov_indicator"></div>
                    <header>
                        <h2>{props.imgTitle}</h2>
                    </header>
                    <p>
                    {props.imgText} <a href="#">here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LgTextComp
