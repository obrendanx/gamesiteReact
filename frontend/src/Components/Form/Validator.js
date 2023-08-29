import React from 'react'
import { css } from '@emotion/css'

function Validator({text, width, left}) {
  return (
    <div className={css`
        position:relative;
        width:${width};
        left:${left}
    `}>
        <span className={css`
            position:relative;
            color:#F44034;
            font-size:0.7em;
            height:20px;
            min-width:${width};
        `}>{text}</span>
    </div>
  )
}

export default Validator