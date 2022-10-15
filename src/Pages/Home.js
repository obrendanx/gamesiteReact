import React from 'react'
import Banner from '../Components/information/Banner'
import LgTextComp from '../Components/information/GameCards/LgTextComp'
import SmallAnime from '../Components/information/GameCards/SmallAnime'
import SmallManga from '../Components/information/GameCards/SmallManga'
import MdTextComp from '../Components/information/GameCards/MdTextComp'
import SetAnime from '../Components/information/GameCards/SetAnime'

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
            <Banner />
            <div className="info_wrap">
                
                <div className="text_comp_one top_block">
                    <div className="large_textbox_wrap">
                        <LgTextComp imgName={SW} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                    </div>
                    <div className="small_textbox_wrap">
                        <MdTextComp imgName={MINECRAFT} imgText={comp_one_text} imgTitle={comp_smone_title} margbot={"margbot"}/>
                        <MdTextComp imgName={MARIO} imgText={comp_one_text} imgTitle={comp_smtwo_title} margbot={"margbot"}/>
                    </div>
                </div>

                <h2 className="section_header">TOP: UPCOMING ANIME</h2>

                <div className="text_comp_two">

                        <div className="comp_two_wrapone">
                            <SetAnime />
                        </div>

                        <h2 className="section_header">Top Stories</h2>

                        <div className="comp_two_wraptwo">
                            <LgTextComp imgName={PS5} imgText={comp_smone_text} imgTitle={comp_smone_title}/>
                            <LgTextComp imgName={XBOX} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title}/>
                        </div>

                        <div className="text_comp_one">
                            <div className="small_textbox_wrap">
                                <MdTextComp imgName={CODMOB} imgText={comp_smone_text} imgTitle={comp_smone_title} margbot={"margbot"}/>
                                <MdTextComp imgName={PKMPEARL} imgText={comp_smtwo_text} imgTitle={comp_smtwo_title} margbot={"margbot"}/>
                            </div>
                            <div className="large_textbox_wrap">
                                <LgTextComp imgName={HALOINFINITE} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        <div className="text_comp_one">
                            <div className="large_textbox_wrap">
                                <LgTextComp imgName={CYBERPUNK} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                            <div className="large_textbox_wrap">
                                <LgTextComp imgName={FALLOUT76} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        <div className="text_comp_one">
                            <div className="large_textbox_wrap">
                                <LgTextComp imgName={SPIDERMAN2} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                            <div className="large_textbox_wrap">
                                <LgTextComp imgName={WARFRAMENEWWAR} imgText={comp_smone_text} imgTitle={comp_one_title}/>
                            </div>
                        </div>

                        <h2 className="section_header">TOP 15 MANGA</h2>

                        {/*<div className="comp_two_wrapone">
                            <SmallManga mangaNo={0} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                            <SmallManga mangaNo={1} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmallManga mangaNo={2} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s2'}/>
                            <SmallManga mangaNo={3} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmallManga mangaNo={4} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                        </div>
                        <div className="comp_two_wrapone">
                            <SmallManga mangaNo={5} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                            <SmallManga mangaNo={6} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmallManga mangaNo={7} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s2'}/>
                            <SmallManga mangaNo={8} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmallManga mangaNo={9} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                        </div>
                        <div className="comp_two_wrapone">
                            <SmallManga mangaNo={10} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                            <SmallManga mangaNo={11} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmallManga mangaNo={12} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s2'}/>
                            <SmallManga mangaNo={13} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmallManga mangaNo={14} imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s4'}/>
                        </div>*/}
                </div>
            </div>
        </div>
    )
}

export default Home
