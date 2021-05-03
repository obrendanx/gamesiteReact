import React from 'react'


function LgTextComp(props) {
    return (
        <div>
            <div className="text_box">
                <img src={props.imgName} alt="image here" />
                <div className="text_area">
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
