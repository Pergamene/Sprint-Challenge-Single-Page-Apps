import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import GetRequest from "../services/GetRequest";

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  pair: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
  },
  button: {
    marginTop: '10px',
    width: '10%',
  },
});

const SearchForm = props => {
  const classes = useStyles();
  const { setCharData, setNumberOfChars } = props;
  const cleanSearch = ['', '', '', ''];
  const [searchParamsArr, setSearchParamsArr] = useState(cleanSearch); 

  const handleChangeName = event => {
    handleChanges(event, 0);
  }

  const handleChangeStatus = event => {
    handleChanges(event, 1);
  }

  const handleChangeSpecies = event => {
    handleChanges(event, 2);
  }

  const handleChangeGender = event => {
    handleChanges(event, 3);
  }

  const handleChanges = (event, index) => {
    const newParamsArr = [...searchParamsArr];
    newParamsArr[index] = event.target.value;
    setSearchParamsArr(newParamsArr);
  };

  const submitForm = event => {
    event.preventDefault();
    const getSearchData = async () => {
      const result = await GetRequest.getRequestSearch(searchParamsArr, setNumberOfChars);
      setCharData(result);
      setSearchParamsArr(cleanSearch);
    };
    getSearchData();
  };

  return (
    <section className={`search-form ${classes.root}`}>
      <h3>Search by</h3>
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.inputs}>
          <div className={classes.pair}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handleChangeName} value={searchParamsArr[0]} />
          </div>
          <div className={classes.pair}>
            <label htmlFor="status">Status</label>
            <input id="status" type="text" name="status" onChange={handleChangeStatus} value={searchParamsArr[1]} />
          </div>
          <div className={classes.pair}>
            <label htmlFor="species">Species</label>
            <input id="species" type="text" name="species" onChange={handleChangeSpecies} value={searchParamsArr[2]} />
          </div>
          <div className={classes.pair}>
            <label htmlFor="gender">Gender</label>
            <input id="gender" type="text" name="gender" onChange={handleChangeGender} value={searchParamsArr[3]} />
          </div>
        </div>
        <button className={classes.button} type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
