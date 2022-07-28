/* 
AboutUser - component fisplay information about employees or users to display on the about page 
        information as follows:
        - team member name
        - team member email
        - information about the team member 
*/

import React from 'react'

function AboutUser(props) {
    return (
        <div className="workUserProfile">
            <img src={props.teamMemImg} alt="Image of team member" className="teamUserImg"/>
            <div className="userInfo">
                <h2 className="teamMemMainHead">{props.teamMemName}</h2>
                <h3 calss="teamMemSubHead">{props.teamMemEmail}</h3>
                <p className="teamMemInfo">
                    {props.teamMemInfo}
                </p>
                {/*<h3 className="teamMemSubHead">Projects</h3>*/}
                {/*<h4 className="teamMemProjects">{props.teamMemProjects}</h4>*/}
            </div>
        </div>
    )
}

export default AboutUser
