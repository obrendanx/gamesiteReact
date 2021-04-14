import React from 'react'


function SmTextComp(props) {
    return (
        <div>
            <div className="text_box_small">
                <img src={props.imgName} alt="image here" />
                <div className="text_area">
                    <header>
                        <h2>{props.imgTitle}</h2>
                    </header>
                    <p>
                    {props.imgText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SmTextComp