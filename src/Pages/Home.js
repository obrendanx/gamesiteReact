import React from 'react'
import Banner from '../Components/Banner'
import LgTextComp from '../Components/LgTextComp'

import RDRDUpdate from '../images/rdrdupdate.jpg'
import WARZONE from '../images/warzone.jpg'
import SOLOLVL from '../images/sololvl121.png'

function Home() {
    return (
        <div>
            <Banner />
            <div className="text_comp">
                <LgTextComp imgName={WARZONE}/>
            </div>
        </div>
    )
}

export default Home
