import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button onClick={() => console.log("Clicky!")}>Test</Button>
      </header>
    </div>
  );
}

export default App;
