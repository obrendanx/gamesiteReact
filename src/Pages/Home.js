import React from 'react'
import Banner from '../Components/Banner'
import LgTextComp from '../Components/LgTextComp'
import SmTextComp from '../Components/SmTextComp'

import DPREMAKE from '../images/main/dpremake.webp'
import SW from '../images/main/sw.jpg'
import MARIO from '../images/main/mario.webp'
import ZELDA from '../images/main/zelda.webp'
import PS5 from '../images/main/ps5.jpg'
import XBOX from '../images/main/xboxx.jpg'
import SMASH from '../images/main/smashbro.jpg'
import MINECRAFT from '../images/main/minecraft.png'
import AC from '../images/main/animalcrossing.jpg'

var comp_one_text = "Some information about the image, and about new updates that are out. Learn more";
var comp_one_title = "Main Title";

var comp_smone_text = "Some information about the image, and about new updates that are out. Learn more";
var comp_smone_title = "Main Title 1";

var comp_smtwo_text = "Some information about the image, and about new updates that are out. Learn more";
var comp_smtwo_title = "Main Title 2";

function Home() {
    return (
        <div className="home_wrap">
            <Banner />
            <div className="text_comp_one">
                <div className="large_textbox_wrap">
                    <LgTextComp imgName={SW} imgText={comp_one_text} imgTitle={comp_one_title}/>
                </div>
                <div className="small_textbox_wrap">
                    <SmTextComp imgName={MINECRAFT} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                    <SmTextComp imgName={MARIO} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                </div>
            </div>

            <h2 className="section_header">Nintendo</h2>

            <div className="text_comp_two">
                    <div className="comp_two_wrapone">
                        <SmTextComp imgName={ZELDA} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <SmTextComp imgName={AC} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                        <SmTextComp imgName={DPREMAKE} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <SmTextComp imgName={SMASH} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                    </div>

                    <h2 className="section_header">Top Stories</h2>

                    <div className="comp_two_wraptwo">
                        <LgTextComp imgName={PS5} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                        <LgTextComp imgName={XBOX} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                    </div>
                </div>
        </div>
    )
}

export default Home
