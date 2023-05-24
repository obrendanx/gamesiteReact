import React from 'react'

function SmallHeader({text, xsm}) {
  return (
    <div>
        <h4
        className={css`
            font-family: 'Oswald', sans-serif;
            height:75px;
            width:97%;
            border-bottom:solid 1px rgb(37, 38, 39);
            margin:10px;
            padding-left:20px;
            padding-top:10px;
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