import React from "react";

import CharacterCard from './CharacterCard.js';

const CharacterList = props => {
  const { charData } = props;

  return (
    <section className="character-list">
      {charData.map((char, index) => {
        return <CharacterCard char={char} key={index} />
      })}
    </section>
  );
}

export default CharacterList;
