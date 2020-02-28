import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  numbers: {
    cursor: 'pointer',
  },
});

const Pages = props => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <span>Page: </span>
      {pages.map(pageNumber => {
        return <span className={classes.numbers} key={pageNumber} onClick={() => changePage(pageNumber)}>{pageNumber} </span>
      })}
    </div>
  );
};

export default Pages;
