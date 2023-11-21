import React from 'react'
import { GrLike } from "react-icons/gr";
import { css } from '@emotion/css'

function LikeBtn() {
  return (
    <div className={css`
        height:10px;
        width:10px;
    `}>
        <button><GrLike /></button>
    </div>
  )
}

export default LikeBtn