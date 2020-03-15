import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/containers/Main.js'
import FullWidthTabs from './tabs/fullWidthTab.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Movies App</h1>
      </header>
      <Main />

      <FullWidthTabs />
      
    </div>
  );
}

export default App;
