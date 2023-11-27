import React, {useContext} from 'react'
import { GrLike } from "react-icons/gr";
import { css } from '@emotion/css';
import useAddLikeQuery from '../../../Querys/addLikeQuery';
import { AuthContext } from '../../User/Auth/AuthContext';

function LikeBtn({total, postId}) {
  const addLikeMutation = useAddLikeQuery();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    await addLikeMutation.mutateAsync({ postId: postId, username: user.username, action: "like" });
  }

  return (
    <div className={css`
        height:10px;
        width:30px;
    `}>
        <button onClick={handleSubmit}><GrLike />{total}</button>
    </div>
  )
}

export default LikeBtn