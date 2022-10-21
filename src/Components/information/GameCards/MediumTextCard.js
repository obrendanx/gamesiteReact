import React from 'react'


function MediumTextCard(props) {
    return (
        <div>
            <div className="text_box_md">
                {/* Card Image */}
                <img src={props.imgName} alt="gaming" />
                <div className="text_area">
                    <div class="hov_indicator"></div>
                    <header>
                        {/* Card Title */}
                        <h2>{props.imgTitle}</h2>
                    </header>
                    <p>
                    {/* Small Card Description */}
                    {props.imgText} <a href="#">here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MediumTextCard