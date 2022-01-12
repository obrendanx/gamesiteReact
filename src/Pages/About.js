import React from 'react'
import AboutUser from '../Components/AboutUser'

function About() {
    return (
        <div>
            <h1>- Our Mission -</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
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
                <AboutUser />
                <AboutUser />
                <AboutUser />
                <AboutUser />
            </div>
        </div>
    )
}

export default About
