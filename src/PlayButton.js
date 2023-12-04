// src/PlayButton.js
import React from 'react';
import Button2 from './Button2';

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button2 onClick={handlePlayClick}>
      Play "{movieName}"
    </Button2>
  );
}

export default PlayButton;