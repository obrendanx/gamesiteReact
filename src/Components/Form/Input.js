import React from 'react';
import { css } from '@emotion/react';

const primary = css`
    /* Primary CSS styles here */
    height:50px;
    margin-top:2%;
    margin-bottom:2%;
    margin-left:15%;
    padding:10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px #000;
    font-size:1em;
    font-weight:normal;
    font-family:Roboto, sans-serif;
    color:#f44034;
    transition:1s;
`;

const secondary = css`
    /* Secondary CSS styles here */
    height:50px;
    margin:10px;
    padding:10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px #000;
    font-size:1em;
    font-weight:normal;
    font-family:Roboto, sans-serif;
    color:#f44034;
    transition:1s;
`;

const sm = css`
    /* Small size CSS styles here */
    width: 150px;
`;

const md = css`
    /* Medium size CSS styles here */
    width: 300px;
`;

const lg = css`
    /* Large size CSS styles here */
    width: 450px;
`;

function Input({ variant, type, placeholder, value, onValueChange }) {
    const classNames = variant.split(' ');
  
    const inputStyles = classNames.includes('secondary') ? secondary : primary;
  
    let sizeStyles;
    if (classNames.includes('sm')) {
      sizeStyles = sm;
    } else if (classNames.includes('md')) {
      sizeStyles = md;
    } else if (classNames.includes('lg')) {
      sizeStyles = lg;
    }
  
    const combinedStyles = [inputStyles, sizeStyles];
  
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      onValueChange(newValue);
      // Call the provided callback function with the new value
    };
  
    return (
      <div>
        <input
          css={combinedStyles}
          type={type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
    );
  }

export default Input;