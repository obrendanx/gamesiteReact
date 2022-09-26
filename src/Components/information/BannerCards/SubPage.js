import React from 'react'

function SubPage(props) {
  return (
    <div>
        <artcile>
            <header>
                <h1>{props.storyTitle}</h1>
            </header>

            <div>
                <p>
                    {props.storySynopsis}
                </p>
            </div>

            <div>
                <iframe src={props.storyVideoSrc}></iframe>
            </div>

            <div>
                <header>
                    <h2>{props.storySubTitle}</h2>
                </header>
                <p>
                    <iframe src={props.storyInfo}></iframe>
                </p>
            </div>
        </artcile>
    </div>
  )
}

export default SubPage