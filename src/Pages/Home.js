import React from 'react'
import Banner from '../Components/information/Banner'
import LgTextComp from '../Components/information/GameCards/LargeTextCard'
import MdTextComp from '../Components/information/GameCards/MediumTextCard'
import SetAnime from '../Components/information/GameCards/SetAnime'
import SetManga from '../Components/information/GameCards/SetManga'

//images being used
import TOG from '../images/togs2.jpg'
import GOH from '../images/goh.jpg'
import SOLO from '../images/sololevel.jpg'
import UNORD from '../images/unordinary.png'
import NOBLESSE from '../images/noblesse.webp'

var comp_one_text = "Some information about the image, and about new updates that are out. Learn more";
var comp_one_title = "Main Title";

var comp_smone_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt mollis mi, sit amet aliquam sem volutpat in. Donec varius. Learn more";
var comp_smone_title = "Main Title 1";

var comp_smtwo_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum et mauris et tempor. Vivamus porttitor leo id lectus pharetra egestas. Learn more";
var comp_smtwo_title = "Main Title 2";

let links = [
    "https://towerofgod.fandom.com/wiki/Tower_of_God_Wiki",
    "https://godofhighschool.fandom.com/wiki/The_God_Of_High_School_Wiki",
    "https://solo-leveling.fandom.com/wiki/Solo_Leveling_Wiki",
    "https://unordinary.fandom.com/wiki/UnOrdinary_Wikia",
    "https://noblesse.fandom.com/wiki/The_Noblesse"
]

let description = [
    "Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'",
    "A 17-year-old martial artist from Seoul, South Korea who practices Full-Contact Karate",
    "In a world where hunters — humans who possess magical abilities — must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival.",
    "Unordinary is the story of a man with a powerful ability born in a world of cripples. The man only used his power for others, helping the weak, saving lives and spreading wealth.",
    "Noblesse (Kor. 노블레스) is the title given to the strongest member of the Noble race. The Noblesse is one of the two pillars of Noble society, equivalent in standing to the Lord."
]

let title = [
    "Tower of God Season 2",
    "God of Highschool",
    "Solo Leveling",
    "Unordinary",
    "Noblesse"
]

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
                        <LgTextComp imgName={TOG} imgText={description[0]} imgTitle={title[0]} imgLink={links[0]}/>
                    </div>
                    <div className="med_textcard">
                        <MdTextComp imgName={GOH} imgText={description[1]} imgTitle={title[1]} imgLink={links[1]} margbot={"margbot"}/>
                        <MdTextComp imgName={SOLO} imgText={description[2]} imgTitle={title[2]} imgLink={links[2]} margbot={"margbot"}/>
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
                                <LgTextComp imgName={UNORD} imgText={description[3]} imgTitle={title[3]} imgLink={links[3]}/>
                            </div>
                            <div className="large_textcard">
                                <LgTextComp imgName={NOBLESSE} imgText={description[4]} imgTitle={title[4]} imgLink={links[4]}/>
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
