import React from 'react';
import './App.css';
import HeadingOne from './components/HeadingOne';
import ClickCounter from './components/ClickCounter'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingOne title="The answer" />
        <HeadingOne title="is" />
        <HeadingOne title="42" />
        <ClickCounter/>
      </header>
    </div>
  );
}

export default App;
