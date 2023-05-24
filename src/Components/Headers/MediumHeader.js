import React from 'react'

function MediumHeader({text}) {
  return (
    <div>
        <h3
        className={css`
            font-family: 'Oswald', sans-serif;
            height:75px;
            width:97%;
            border-bottom:solid 1px rgb(37, 38, 39);
            margin:10px;
            padding-left:20px;
            padding-top:10px;
            font-size:1.2em;
            color:#fff;
        `}
        >
            {text}
        </h3>
    </div>
  )
}

export default MediumHeader