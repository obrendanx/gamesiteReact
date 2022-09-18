import React from 'react'
import Banner from '../Components/Banner'
import LgTextComp from '../Components/LgTextComp'
import SmTextComp from '../Components/SmTextComp'
import MdTextComp from '../Components/MdTextComp'

import DPREMAKE from '../images/main/dpremake.webp'
import SW from '../images/main/sw.jpg'
import MARIO from '../images/main/mario.webp'
import ZELDA from '../images/main/zelda.webp'
import PS5 from '../images/main/ps5.jpg'
import XBOX from '../images/main/xboxx.jpg'
import SMASH from '../images/main/smashbro.jpg'
import MINECRAFT from '../images/main/minecraft.png'
import AC from '../images/main/animalcrossing.jpg'
import CODMOB from '../images/main/codmob.jpeg'
import HALOINFINITE from '../images/main/haloinfinite.jpeg'
import PKMPEARL from '../images/main/pkmpearl.jpeg'
import FALLOUT76 from '../images/main/fallout76.jpeg'
import CYBERPUNK from '../images/main/cyberpunk.jpeg'
import SPIDERMAN2 from '../images/main/spiderman2.png'
import WARFRAMENEWWAR from '../images/main/warframenewwar.jpeg'
import PKMDIAMOND from '../images/main/pkmdiamond.jpeg'
import PKMFIRERED from '../images/main/pkmfirered.jpg'
import PKMBLACK from '../images/main/pkmblack.jpeg'
import PKMWHITE2 from '../images/main/pkmwhite2.jpg'

import TOG from '../imgs/togs2.jpg'
import SOLOLEVEL from '../imgs/goh.jpg'
import GOH from '../imgs/sololevel.jpg'
import UNORDINARY from '../imgs/unordinary.png'

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

                <h2 className="section_header">Nintendo</h2>

                <div className="text_comp_two">

                        <div className="comp_two_wrapone">
                            <SmTextComp imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmTextComp imgName={AC} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s2'}/>
                            <SmTextComp imgName={DPREMAKE} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmTextComp imgName={SMASH} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s4'}/>
                            {/* <SmTextComp imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmTextComp imgName={AC} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s2'}/>
                            <SmTextComp imgName={DPREMAKE} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmTextComp imgName={SMASH} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s4'}/> */}
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

                        <div className="comp_two_wrapone">
                            <SmTextComp imgName={PKMBLACK} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmTextComp imgName={PKMDIAMOND} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s2'}/>
                            <SmTextComp imgName={PKMFIRERED} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmTextComp imgName={PKMWHITE2} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s4'}/>
                            {/* <SmTextComp imgName={ZELDA} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s1'}/>
                            <SmTextComp imgName={AC} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s2'}/>
                            <SmTextComp imgName={DPREMAKE} imgText={comp_one_text} imgTitle={comp_smone_title} colorscheme={'color-scheme-s3'}/>
                            <SmTextComp imgName={SMASH} imgText={comp_one_text} imgTitle={comp_smtwo_title} colorscheme={'color-scheme-s4'}/> */}
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Home
