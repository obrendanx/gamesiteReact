import React from 'react';
import { css } from '@emotion/css';
import Button from './Buttons/Button'

function CommentBox({ value, onValueChange}) {

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        onValueChange(newValue);
    };

  return (
    <div className={css`
        height:100px;
        width:100%;
        &:nth-of-type(odd) {
            background: #212121;
        }
    `}>
        <textarea 
            value={value}
            onChange={handleInputChange}
            className={css`
                width:95%;
                height:50px;
                font-size:0.8em;
                resize: none;
                margin-left:2.5%;
                margin-top:7.5px;
            `}
        />
        <button 
            className={css`
                font-size:0.7em;
                color:#F36644;
                height:25px;
                width:75px;
                padding:5px;
                border:none;
                font-weight:600;
                background:#fff;
                @media (max-width: 770px){
                  width:100%;
                }
            `}
        >
            Comment
        </button>
    </div>
  )
}

export default CommentBox