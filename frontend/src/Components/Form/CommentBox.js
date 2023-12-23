import React, {useState, useContext} from 'react';
import { css } from '@emotion/css';
import Button from './Buttons/Button';
import useAddComment from '../../Querys/addCommentQuery';
import { AuthContext } from '../User/Auth/AuthContext';

function CommentBox({userComment}) {
    const [comment, setComment] = useState("");
    const { user } = useContext(AuthContext);
    const handleInputChange = (event) => {
        setComment(event.target.value);
    };

  return (
    <div className={css`
        min-height:120px;
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
                  width:95%;
                }
            `}
        >
            Comment
        </button>

        <div>
            {userComment.map(comment => (
                <div className={css`
                    width:95%;
                    margin-left:2.5%;
                    padding:15px;
                    color:#fff;
                    &:nth-of-type(even) {
                        background: #212121;
                    }
                `}>
                    <p>{comment.comment}</p>
                    <h3 className={css`
                        font-size:0.6em;
                    `}>
                        comment by: {comment.username}
                    </h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CommentBox