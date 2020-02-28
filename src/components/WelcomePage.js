import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    paddingTop: '10px',
    color: 'black',
    fontSize: '22px',
  },
});

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <section className="welcome-page">
      <header className={classes.root}>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters/" className={classes.link}>View the Characters!</Link>
      </header>
    </section>
  );
}

export default WelcomePage;
