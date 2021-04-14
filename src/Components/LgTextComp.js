import React from 'react'


function LgTextComp(props) {
    return (
        <div>
            <div className="text_box">
                <img src={props.imgName} alt="image here" />
                <div className="text_area">
                    <header>
                        <h2>Main Title</h2>
                    </header>
                    <p>
                    Some information about the image, and about new updates that are out. Learn more here
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LgTextComp
