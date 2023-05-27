import React from 'react'
import { css } from '@emotion/css'

function SmallHeader({text, xsm}) {
  return (
    <div>
        <h4
        className={css`
            font-family: 'Oswald', sans-serif;
            height:35px;
            width:97%;
            margin:2.5px;
            padding:2.5px;
            ${xsm ? 'font-size:0.8em;' : 'font-size:0.4em;'}
            color:#fff;
        `}
        >
            {text}
        </h4>
    </div>
  )
}

export default SmallHeader