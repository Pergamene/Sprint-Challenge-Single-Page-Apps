import React, { useEffect, useState } from 'react';

import SearchForm from './SearchForm.js';
import CharacterList from './CharacterList.js';
import GetRequest from '../services/GetRequest.js';
import Pages from './Pages.js';

const CharacterPage = () => {
  const [charData, setCharData] = useState([]);
  const [pageNumber, setPageNumber] = useState('1');
  const [numberOfChars, setNumberOfChars] = useState('0');

  useEffect(() => {
    const getCharData = async () => {
      const result = await GetRequest.getRequest(pageNumber, setNumberOfChars);
      setCharData([...result]);
    };
    getCharData();
  }, [pageNumber]);

  const changePage = pageNumber => {
    setPageNumber(pageNumber);
  }

  if (charData) {
    return (
      <div>
        <h2>The Characters:</h2>
        <SearchForm setCharData={setCharData} setNumberOfChars={setNumberOfChars} />
        <CharacterList charData={charData}/>
        <Pages numberOfChars={numberOfChars} changePage={changePage} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>The Characters:</h2>
        <SearchForm setCharData={setCharData}/>
      </div>
    );
  }
}

export default CharacterPage;
