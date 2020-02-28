import React from "react";

const CharacterCard = props => {
  const { char } = props;

  return (
    <div>
      <h3>{char.name}</h3>
      <p>Species: {char.species}</p>
      <p>Gender: {char.gender}</p>
      <p>Status: {char.status}</p>
      <p>Origin: {char.origin.name}</p>
      <p>Location: {char.location.name}</p>
      <p>In {char.episode.length} episode(s)</p>
      <img src={char.image} alt={`${char.name} profile picture`}/>
    </div>
  );
}

export default CharacterCard;
