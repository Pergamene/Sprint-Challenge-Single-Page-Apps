import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    border: '5px solid gray',
    borderRadius: '20px',
    backgroundColor: '#efefef',
    padding: '10px',
    marginBottom: '50px',
  },
  h3: {
    textDecoration: 'underline',
  },
  img: {
    borderRadius: '30px',
    marginBottom: '10px',
  },
  p: {
    marginTop: '0',
    marginBottom: '5px',
  },
});

const CharacterCard = props => {
  const classes = useStyles();
  const { char } = props;

  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>{char.name}</h3>
      <img className={classes.img} src={char.image} alt={`${char.name} profile picture`}/>
      <p className={classes.p}>Species: {char.species}</p>
      <p className={classes.p}>Gender: {char.gender}</p>
      <p className={classes.p}>Status: {char.status}</p>
      <p className={classes.p}>Origin: {char.origin.name}</p>
      <p className={classes.p}>Location: {char.location.name}</p>
      <p className={classes.p}>In {char.episode.length} episode(s)</p>
    </div>
  );
}

export default CharacterCard;
