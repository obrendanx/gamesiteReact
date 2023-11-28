import React, {useContext} from 'react'
import { GrDislike } from "react-icons/gr";
import { css } from '@emotion/css';
import useAddLikeQuery from '../../../Querys/addLikeQuery';
import { AuthContext } from '../../User/Auth/AuthContext';

function DislikeBtn({total, postId, dislikeUsers}) {
    const addLikeMutation = useAddLikeQuery();
    const { user } = useContext(AuthContext);

    const isUserDisliked = dislikeUsers.includes(user.username);

    const handleSubmit = async (event) => {
      await addLikeMutation.mutateAsync({ postId: postId, username: user.username, action: "dislike" });
    }

  return (
    <div className={css`
        height:10px;
        width:30px;
    `}>
        <button className={css`
          background-color: ${isUserDisliked ? '#1B79F7' : '#fff'};
          border:none;
          padding:2px;
        `} onClick={handleSubmit}><GrDislike />{total}</button>
    </div>
  )
}

export default DislikeBtn