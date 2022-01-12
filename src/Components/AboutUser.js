import React from 'react'

function AboutUser(props) {
    return (
        <div>
            <img src={props.teamMemImg} alt="Image of team member"/>
            <h2>{props.teamMemName}</h2>
            <h3>{props.teamMemEmail}</h3>
            <p>
                {props.teamMemInfo}
            </p>
            <h3>Projects</h3>
            <h4>{props.teamMemProjects}</h4>
        </div>
    )
}

export default AboutUser
