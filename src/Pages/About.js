import React from 'react'
import AboutUser from '../Components/AboutUser'

var teaminfo = "Cras luctus bibendum justo, ut consectetur libero euismod non. Cras ut elit semper neque ultrices consectetur at eu tortor. Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. Nulla aliquam ullamcorper mattis."

function About() {
    return (
        <div className="about_main">
            <h1 className="abt_main_head">- Our Mission -</h1>
            <h2 className="abtSubHead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h1 className="abt_main_head">About</h1>
            <p className="abtMainPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque mollis tincidunt pretium. Cras quis commodo ligula, 
            eu facilisis massa. Praesent sodales euismod ipsum, et dapibus dolor finibus id. 
            Integer aliquet lectus eu ante aliquam pharetra. Pellentesque mollis risus justo, 
            dictum pharetra massa gravida et. Cras non felis odio. Fusce fermentum interdum magna, 
            a vulputate magna aliquet eu. Morbi mollis pharetra felis vel sollicitudin. 
            Integer congue lorem nisl, bibendum consequat mauris vestibulum quis. 
            Curabitur a augue elementum, cursus felis quis, tempus ipsum. Donec id egestas lectus, 
            accumsan ultrices nunc. Proin finibus nisi elementum purus auctor ultricies. 
            Fusce ac dapibus odio. Sed rutrum et sem ac convallis. Quisque tristique bibendum augue et gravida. 
            Etiam vitae cursus orci, vitae laoreet lectus.<br></br><br></br>

            Proin erat massa, vestibulum sed tortor et, dapibus pretium nisl. 
            Mauris rutrum purus eget tellus facilisis fermentum. Sed interdum pretium sapien at interdum. 
            Nam et aliquet turpis, a tempus lorem. Nam ac blandit lorem. Donec in laoreet nibh. 
            Cras luctus bibendum justo, ut consectetur libero euismod non. 
            Cras ut elit semper neque ultrices consectetur at eu tortor. 
            Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. 
            Nulla aliquam ullamcorper mattis.
            </p>
            <div className="teamMembers">
                <h1 className="abt_main_head">Leadership</h1>
                <AboutUser teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"}/>
                <AboutUser teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"}/>
                <AboutUser teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"}/>
                <AboutUser teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"}/>
            </div>
        </div>
    )
}

export default About
