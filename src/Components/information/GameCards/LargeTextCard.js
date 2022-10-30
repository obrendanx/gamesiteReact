import React from 'react'

function LargeTextCard(props) {
    return (
        <div>
            <div className="text_box">
                {/* Card Image */}
                <img src={props.imgName} alt="gaming" />
                <div className="text_area" id="text_area">
                    <div class="hov_indicator"></div>
                    <header>
                        {/* Card Title */}
                        <h2>{props.imgTitle}</h2>
                    </header>
                    <p>
                    {/* Small Description of Card */}
                    {props.imgText} <a href={props.imgLink}>here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LargeTextCard
