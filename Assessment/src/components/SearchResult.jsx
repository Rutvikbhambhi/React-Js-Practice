import React from 'react';

import "./searchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You Clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
