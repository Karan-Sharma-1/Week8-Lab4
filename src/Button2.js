// src/Button.js
import React from 'react';

function Button2({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button2;