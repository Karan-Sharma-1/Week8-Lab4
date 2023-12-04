// src/UploadButton.js
import React from 'react';
import Button2 from './Button2';

function UploadButton() {
  return (
    <Button2 onClick={() => alert('Uploading!')}>
      Upload Image
    </Button2>
  );
}

export default UploadButton;