import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import CharacterCard from './CharacterCard.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}); 

const CharacterList = props => {
  const classes = useStyles();
  const { charData } = props;

  return (
    <section className={`character-list ${classes.root}`}>
      {charData.map((char, index) => {
        return <CharacterCard char={char} key={index} />
      })}
    </section>
  );
}

export default CharacterList;
