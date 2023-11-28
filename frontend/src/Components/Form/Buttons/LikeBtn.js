import React, {useContext} from 'react'
import { GrLike } from "react-icons/gr";
import { css } from '@emotion/css';
import useAddLikeQuery from '../../../Querys/addLikeQuery';
import { AuthContext } from '../../User/Auth/AuthContext';

function LikeBtn({total, postId, likedUsers}) {
  const addLikeMutation = useAddLikeQuery();
  const { user } = useContext(AuthContext);

  const isUserLiked = likedUsers.includes(user.username);

  const handleSubmit = async (event) => {
    await addLikeMutation.mutateAsync({ postId: postId, username: user.username, action: "like" });
  }

  return (
    <div className={css`
        height:10px;
        width:30px;
    `}>
        <button className={css`
          background-color: ${isUserLiked ? '#1B79F7' : '#fff'};
          border:none;
          padding:2px;
        `} onClick={handleSubmit}><GrLike />{total}</button>
    </div>
  )
}

export default LikeBtn