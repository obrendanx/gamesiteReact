import React, { Component } from 'react';
import LgInfoBox from '../Components/LgInfoBox';

const Home = (props) => {
    return(
        <div className="Home">
            <h1>Home</h1>
            <LgInfoBox compNum="1"/>
            <LgInfoBox compNum="2"/>
            <LgInfoBox compNum="3"/>
        </div>
    );
}
export default Home;
