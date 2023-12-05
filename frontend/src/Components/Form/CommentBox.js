import React, {useState} from 'react';
import { css } from '@emotion/css';
import Button from './Buttons/Button';
import useAddComment from '../../Querys/addCommentQuery';

function CommentBox() {
    const [comment, setComment] = useState("");
    const handleInputChange = (event) => {
        setComment(event.target.value);
    };

  return (
    <div className={css`
        height:120px;
        width:100%;
        border:solid 2px #fff;
        border-radius:10px;
        padding:15px;
    `}>
        <textarea 
            value={comment}
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
                margin-left:2.5%;
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