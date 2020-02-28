import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={`ui centered ${classes.root}`}>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}

export default Header;
