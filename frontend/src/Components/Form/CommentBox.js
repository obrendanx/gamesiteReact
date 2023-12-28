import React, {useState, useContext} from 'react';
import { css } from '@emotion/css';
import Button from './Buttons/Button';
import useAddComment from '../../Querys/addCommentQuery';
import { AuthContext } from '../User/Auth/AuthContext';
import useRemoveComment from '../../Querys/deleteCommentQuery';

function CommentBox({userComment, postId}) {
    const [comment, setComment] = useState("");
    const { user, isLoggedIn } = useContext(AuthContext);
    const removeCommentMutation = useRemoveComment();
    const handleInputChange = (event) => {
        setComment(event.target.value);
    };
    const addCommentMutation = useAddComment();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newComment = {
            username: user.username,
            postId: postId,
            comment: comment,
        };

        await addCommentMutation.mutateAsync(newComment);
    
        // Reset form fields
        setComment('');
    };

    const handleRemoveComment = async (postid, commentid) => {
      await removeCommentMutation.mutateAsync({
        postId: postid,
        commentId: commentid
      });
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
            onClick={handleSubmit}
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
                    position:relative;
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
                    { user.username === comment.username && isLoggedIn ? (
                    <div 
                        onClick={() => handleRemoveComment(postId, comment._id)}
                        className={css`
                            text-align:left;
                            margin-left:10px;
                            font-size: 0.7em;
                            color: #F3664A;
                            font-family: Roboto, sans-serif;
                            font-weight: 300;
                            border:none;
                            width:100px;
                            position:absolute;
                            right:0;
                            background:none;
                            margin-bottom:5px;
                            &:hover{
                                cursor:pointer;
                            }
                        `}
                    >
                        remove comment
                    </div>
                  ) : null}
                </div>
            ))}
        </div>
    </div>
  )
}

export default CommentBox