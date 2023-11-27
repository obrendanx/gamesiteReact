import React, {useContext} from 'react'
import { GrDislike } from "react-icons/gr";
import { css } from '@emotion/css';
import useAddLikeQuery from '../../../Querys/addLikeQuery';
import { AuthContext } from '../../User/Auth/AuthContext';

function DislikeBtn({total, postId}) {
    const addLikeMutation = useAddLikeQuery();
    const { user } = useContext(AuthContext);

    const handleSubmit = async (event) => {
      await addLikeMutation.mutateAsync({ postId: postId, username: user.username, action: "dislike" });
    }

  return (
    <div className={css`
        height:10px;
        width:30px;
    `}>
        <button onClick={handleSubmit}><GrDislike />{total}</button>
    </div>
  )
}

export default DislikeBtn