import React from 'react'


function MdTextComp(props) {
    return (
        <div>
            <div className="text_box_md">
                <img src={props.imgName} alt="gaming" />
                <div className="text_area">
                    <div class="hov_indicator"></div>
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

export default MdTextComp