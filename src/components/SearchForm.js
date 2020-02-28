import React, { useState } from "react";
import GetRequest from "../services/GetRequest";

const SearchForm = props => {
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
    <section className="search-form">
      <h3>Search by:</h3>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" onChange={handleChangeName} value={searchParamsArr[0]} />
        <label htmlFor="status">Status</label>
        <input id="status" type="text" name="status" onChange={handleChangeStatus} value={searchParamsArr[1]} />
        <label htmlFor="species">Species</label>
        <input id="species" type="text" name="species" onChange={handleChangeSpecies} value={searchParamsArr[2]} />
        <label htmlFor="gender">Gender</label>
        <input id="gender" type="text" name="gender" onChange={handleChangeGender} value={searchParamsArr[3]} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
