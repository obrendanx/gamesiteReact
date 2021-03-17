import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <input
     className="barStyle"
     key="random1"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
