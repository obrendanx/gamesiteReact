import React from 'react'
import { GrDislike } from "react-icons/gr";
import { css } from '@emotion/css'

function DislikeBtn() {
  return (
    <div className={css`
        height:10px;
        width:10px;
        color:#fff;
    `}>
        <button><GrDislike /></button>
    </div>
  )
}

export default DislikeBtn