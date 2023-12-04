// src/App.js
import Toolbar2 from './Toolbar2';
import Toolbar from './Toolbar';
import React from 'react';
import Button2 from './Button2';
import Button from './Button'; // Import the Button component

function App() {
  return (
    
    <div className="App">
      <h1>Passing Event Handlers as Props</h1>
      <Toolbar2 />
        <h1>Reading Props in Event Handlers</h1>
      <Button2 /> {/* Use the Button component */}
      <Toolbar />
        <h1>React Events Lab</h1>
      <Button /> {/* Use the Button component */}
    </div>
  );
}

export default App;

