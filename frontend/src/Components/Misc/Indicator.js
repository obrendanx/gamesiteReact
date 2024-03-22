import React from 'react'
import { css } from '@emotion/css'

function Indicator({md}) {
  return (
    <div
    className={css`
        background:rgb(114, 112, 112);
        height:10px;
        width:30px;
        transition:1s;
        margin-bottom:5px;
        &:hover{
            ${md ? 'background:rgb(245, 242, 242);' : 'background:#F44336;'}
        }
    `}
    >

    </div>
  )
}

export default Indicator