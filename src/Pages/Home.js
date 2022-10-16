import React from 'react'
import Banner from '../Components/information/Banner'
import LgTextComp from '../Components/information/GameCards/LargeTextCard'
import SmallAnime from '../Components/information/GameCards/SmallAnime'
import SmallManga from '../Components/information/GameCards/SmallManga'
import MdTextComp from '../Components/information/GameCards/MediumTextCard'
import SetAnime from '../Components/information/GameCards/SetAnime'
import SetManga from '../Components/information/GameCards/SetManga'

//images being used
import DPREMAKE from '../images/main/dpremake.webp' //small
import SW from '../images/main/sw.jpg' //large
import MARIO from '../images/main/mario.webp' //med
import ZELDA from '../images/main/zelda.webp' //small
import PS5 from '../images/main/ps5.jpg' //large
import XBOX from '../images/main/xboxx.jpg'//large
import SMASH from '../images/main/smashbro.jpg' //small
import MINECRAFT from '../images/main/minecraft.png' //med
import AC from '../images/main/animalcrossing.jpg' //small
import CODMOB from '../images/main/codmob.jpeg' //med
import HALOINFINITE from '../images/main/haloinfinite.jpeg' //large
import PKMPEARL from '../images/main/pkmpearl.jpeg' //med
import FALLOUT76 from '../images/main/fallout76.jpeg' //large
import CYBERPUNK from '../images/main/cyberpunk.jpeg' //large
import SPIDERMAN2 from '../images/main/spiderman2.png' //large
import WARFRAMENEWWAR from '../images/main/warframenewwar.jpeg' //large
import PKMDIAMOND from '../images/main/pkmdiamond.jpeg' //small
import PKMFIRERED from '../images/main/pkmfirered.jpg' //small
import PKMBLACK from '../images/main/pkmblack.jpeg' //small
import PKMWHITE2 from '../images/main/pkmwhite2.jpg' //small

var comp_one_text = "Some information about the image, and about new updates that are out. Learn more";
var comp_one_title = "Main Title";

var comp_smone_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt mollis mi, sit amet aliquam sem volutpat in. Donec varius. Learn more";
var comp_smone_title = "Main Title 1";

var comp_smtwo_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum et mauris et tempor. Vivamus porttitor leo id lectus pharetra egestas. Learn more";
var comp_smtwo_title = "Main Title 2";

function Home() {
    return (
        <div className="home_wrap">
            {/* Banner Section */}
            <Banner />
            <div className="info_wrap">
                
                <h2 className="section_header">TOP: UPCOMING ANIME</h2>

                {/* Introduction Content */}
                <div className="intro_content">
                    <div className="large_textcard">
                        <LgTextComp imgName={SW} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                    </div>
                    <div className="med_textcard">
                        <MdTextComp imgName={MINECRAFT} imgText={comp_one_text} imgTitle={comp_smone_title} margbot={"margbot"}/>
                        <MdTextComp imgName={MARIO} imgText={comp_one_text} imgTitle={comp_smtwo_title} margbot={"margbot"}/>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main_content">

                        {/* Section One */}
                        <h2 className="section_header">TOP: UPCOMING ANIME</h2>
                        <SetAnime />

                        {/* Section 2 */}
                        <h2 className="section_header">Top Stories</h2>
                        <div className="info_section">
                            <div className="large_textcard">
                                <LgTextComp imgName={PS5} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                            </div>
                            <div className="large_textcard">
                            <LgTextComp imgName={XBOX} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                        </div>
                        </div>

                        <div className="info_section">
                            <div className="med_textcard">
                                <MdTextComp imgName={CODMOB} imgText={comp_smone_text} imgTitle={comp_smone_title} margbot={"margbot"}/>
                                <MdTextComp imgName={PKMPEARL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title} margbot={"margbot"}/>
                            </div>
                            <div className="large_textcard">
                                <LgTextComp imgName={HALOINFINITE} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        <div className="info_section">
                            <div className="large_textcard">
                                <LgTextComp imgName={CYBERPUNK} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                            <div className="large_textcard">
                                <LgTextComp imgName={FALLOUT76} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        <div className="info_section">
                            <div className="large_textcard">
                                <LgTextComp imgName={SPIDERMAN2} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                            <div className="large_textcard">
                                <LgTextComp imgName={WARFRAMENEWWAR} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <h2 className="section_header">TOP 15 MANGA</h2>
                        <SetManga />
                </div>
            </div>
        </div>
    )
}

export default Home
