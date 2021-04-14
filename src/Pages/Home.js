import React from 'react'
import Banner from '../Components/Banner'
import LgTextComp from '../Components/LgTextComp'
import SmTextComp from '../Components/SmTextComp'

import RDRDUpdate from '../images/rdrdupdate.jpg'
import WARZONE from '../images/warzone.webp'
import SOLOLVL from '../images/sololvl121.png'
import GAMESCORE from '../images/gamescore.jpg'

var comp_one_text = "Some information about the image, and about new updates that are out. Learn more here";
var comp_one_title = "Main Title";

var comp_smone_text = "Some information about the image, and about new updates that are out. Learn more here";
var comp_smone_title = "Main Title 1";

var comp_smtwo_text = "Some information about the image, and about new updates that are out. Learn more here";
var comp_smtwo_title = "Main Title 2";

function Home() {
    return (
        <div>
            <Banner />
            <div className="text_comp_one">
                <div className="large_textbox_wrap">
                    <LgTextComp imgName={WARZONE} imgText={comp_one_text} imgTitle={comp_one_title}/>
                </div>
                <div className="small_textbox_wrap">
                    <SmTextComp imgName={GAMESCORE} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                    <SmTextComp imgName={SOLOLVL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                </div>
            </div>

            <div className="text_comp_two">
                    <div className="comp_two_wrapone">
                        <SmTextComp imgName={GAMESCORE} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <SmTextComp imgName={SOLOLVL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                        <SmTextComp imgName={GAMESCORE} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <SmTextComp imgName={SOLOLVL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                    </div>

                    <div className="comp_two_wraptwo">
                        <SmTextComp imgName={GAMESCORE} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <SmTextComp imgName={SOLOLVL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                    </div>
                </div>
        </div>
    )
}

export default Home
