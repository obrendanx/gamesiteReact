import React from 'react'
import AboutUser from '../Components/AboutUser'
import Footer from '../Components/Footer';

import personone from '../images/main/defperson.png'
import persontwo from '../images/main/defperson.png'
import personthree from '../images/main/defperson.png'
import personfour from '../images/main/defperson.png'

var teaminfo = "Cras luctus bibendum justo, ut consectetur libero euismod non. Cras ut elit semper neque ultrices consectetur at eu tortor. Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. Nulla aliquam ullamcorper mattis."

function About() {
    return (
        <div className="about_main">
                <div className="abt-padd">
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
                    <div className="members">
                        <div className="member_group_one">
                            <AboutUser teamMemImg={personone} teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"} className="aboutuser"/>
                            <AboutUser teamMemImg={persontwo} teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"} className="aboutuser"/>
                        </div>
                        <div className="member_group_two">
                            <AboutUser teamMemImg={personthree} teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"} className="aboutuser"/>
                            <AboutUser teamMemImg={personfour} teamMemName={"Name Here"} teamMemEmail={"teamemail@email.com"} teamMemInfo={teaminfo} teamMemProjects={"Projects here"} className="aboutuser"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
