import React from 'react'
import SubPage from '../../Components/information/BannerCards/SubPage.js'

function TowerOfGod() {
    const storyTitle = "Tower of God";
    const storySynopsis = "Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'. He has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated. Somehow, Bam manages to open the door to the Tower. Now, he will go any distance to see Rachel again even if it means dying. When he enters the Tower, he meets allies that will help him up the tower."
    const storyVideoSrc = "https://www.youtube.com/watch?v=5H9U6SugSzk";
    const storySubTitle = "Tower of God: Wiki";
    const storyInfo = "https://towerofgod.fandom.com/wiki/Tower_of_God_Wiki";

  return (
    <div>
        <SubPage storyTitle={storyTitle} storySynopsis={storySynopsis} storyVideoSrc={storyVideoSrc} storySubTitle={storySubTitle} storyInfo={storyInfo}/>
    </div>
  )
}

export default TowerOfGod