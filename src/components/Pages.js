import React from 'react';

const Pages = props => {
  const { changePage, numberOfChars } = props;

  const makePageNumberArray = () => {
    const NUMBER_OF_CHARACTERS = numberOfChars;
    const CHARACTERS_PER_PAGE = 20;
    const pages = Math.ceil(NUMBER_OF_CHARACTERS / CHARACTERS_PER_PAGE);
    const nums = [];
    for (let i = 1; i <= pages; i++) {
      nums.push(i);
    }
    return nums;
  }

  const pages = makePageNumberArray();

  return (
    <div>
      <span>Page: </span>
      {pages.map(pageNumber => {
        return <span key={pageNumber} onClick={() => changePage(pageNumber)}>{pageNumber} </span>
      })}
    </div>
  );
};

export default Pages;
