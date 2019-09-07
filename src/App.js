import React from 'react';
import './App.css';
import HeadingOne from './components/HeadingOne'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingOne title="This is one title" />
        <HeadingOne title="Here is my name" />
        <HeadingOne title="CARE-O-LINE" />
      </header>
    </div>
  );
}

export default App;
