// src/Toolbar2.js
import React from 'react';
import PlayButton from './PlayButton';
import UploadButton from './UploadButton';

export default function Toolbar2() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}