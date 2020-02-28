import React, { useEffect, useState } from 'react';

import SearchForm from './SearchForm.js';
import CharacterList from './CharacterList.js';
import GetRequest from '../services/GetRequest.js';

const CharacterPage = () => {
  const [charData, setCharData] = useState([]);
  const [pageNumber, setPageNumber] = useState('1');

  useEffect(() => {
    const getCharData = async () => {
      const result = await GetRequest.getRequest(pageNumber);
      setCharData([...result]);
    };
    getCharData();
  }, [pageNumber]);

  console.log('CHARDATA: ', charData);

  if (charData) {
    return (
      <div>
        <h2>The Characters:</h2>
        <SearchForm setCharData={setCharData}/>
        <CharacterList charData={charData}/>
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
