import React from 'react'
import { css } from '@emotion/css'

function TextArea({ type, textname, value, onValueChange, left, placeholder }) {
   const handleInputChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
  };

  return (
    <div>
        <textarea
        className={css`
            height: 125px;
            width: 100%;
            margin-top: 2%;
            margin-bottom: 2%;
            margin-left: ${left};
            padding: 10px;
            border: 0;
            border-radius: 10px;
            box-shadow: 0 0 15px 4px #000;
            font-size: 1em;
            font-weight: normal;
            font-family: Roboto, sans-serif;
            color: #f44034;
            transition: 1s;
            outline:none;
        `}
        type={type}
        value={value}
        onChange={handleInputChange}
        name={textname}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextArea