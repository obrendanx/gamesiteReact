import React from 'react';
import { css } from '@emotion/css';

function RightArrBtn({ handleClick, text }) {
  return (
    <button
      onClick={handleClick}
      className={css`
            fontSize: '1em',
            fontFamily: 'Roboto, sans-serif',
            color: '#fff',
            position: 'absolute',
            top: '45%',
            margin: '0 1.5% 0 1.5%',
            border: 'none',
            borderRadius: '50%',
            height: '8.5%',
            width: '5%',
            background: 'rgba(0, 0, 0, 0.6)',
            right: 0,
      `}
    >
      {text}
    </button>
  );
}

export default RightArrBtn;