import React from 'react'
import Banner from '../Components/Information/Banner'
import LgTextComp from '../Components/TextCards/LargeTextCard'
import MdTextComp from '../Components/TextCards/MediumTextCard'
import SetAnime from '../Components/TextCards/SetAnime'
import SetManga from '../Components/TextCards/SetManga'
import styled from '@emotion/styled'
import LargeHeader from '../Components/Headers/LargeHeader'

//images being used
import TOG from '../images/togs2.jpg'
import GOH from '../images/goh.jpg'
import SOLO from '../images/sololevel.jpg'
import UNORD from '../images/unordinary.png'
import NOBLESSE from '../images/noblesse.webp'

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

const HomeWrap = styled.div`
    padding-bottom:2.5%;
    background:#333333;
`

const SectionHeader = styled.h2`
    font-family: 'Oswald', sans-serif;
    height:75px;
    width:97%;
    border-bottom:solid 1px rgb(37, 38, 39);
    margin:10px;
    padding-left:20px;
    padding-top:10px;
    font-size:2em;
    color:#fff;
`

const TextCard = styled.div`
    width:47.5%;
    @media (max-width: 770px){
        width:100%;
    }
`

const IntroContent = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    width:90%;
    margin-left:5%;
    column-gap:2.5%;
    @media (max-width: 770px){
        flex-direction:column;
        margin-left:5%;
        display:block;
    }
`

const InfoSectionTwo = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    margin-left:2.5%;
    column-gap:2.5%;
    @media (max-width: 770px){
        width:90%;
        flex-direction:column;
        margin-left:5%;
        display:block;
    }
`

const InfoWrap = styled.div`
    @media (max-width: 770px) {
        margin-top:0;
    }
`

function Home() {
    return (
        <HomeWrap>
            {/* Banner Section */}
            <Banner />
            <InfoWrap>
                
                <LargeHeader text="TOP: UPCOMING ANIME"></LargeHeader>

                {/* Introduction Content */}
                <IntroContent>
                    <TextCard>
                        <LgTextComp imgName={TOG} imgText={description[0]} imgTitle={title[0]} imgLink={links[0]}/>
                    </TextCard>
                    <TextCard>
                        <MdTextComp imgName={GOH} imgText={description[1]} imgTitle={title[1]} imgLink={links[1]} margbot={"margbot"}/>
                        <MdTextComp imgName={SOLO} imgText={description[2]} imgTitle={title[2]} imgLink={links[2]} margbot={"margbot"}/>
                    </TextCard>
                </IntroContent>

                {/* Main Content */}
                <div className="main_content">

                        {/* Section One */}
                        <SectionHeader>TOP: UPCOMING ANIME</SectionHeader>
                        <SetAnime />

                        {/* Section 2 */}
                        <SectionHeader>Top Stories</SectionHeader>

                        <InfoSectionTwo>
                            <TextCard>
                                <LgTextComp imgName={UNORD} imgText={description[3]} imgTitle={title[3]} imgLink={links[3]}/>
                            </TextCard>
                            <TextCard>
                                <LgTextComp imgName={NOBLESSE} imgText={description[4]} imgTitle={title[4]} imgLink={links[4]}/>
                            </TextCard>
                        </InfoSectionTwo>

                        {/* Section 3 */}
                        <SectionHeader>TOP 15 MANGA</SectionHeader>
                        <SetManga />
                </div>
            </InfoWrap>
        </HomeWrap>
    )
}

export default Home
