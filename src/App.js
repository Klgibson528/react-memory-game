import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Card from './Card.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Memory Game
          </h1>
          <h3>Match Cards to Win!</h3>
        </header>
        <div><Card /><Card /><Card /><Card /></div>
        <div><Card /><Card /><Card /><Card /></div>
        <div><Card /><Card /><Card /><Card /></div>
        <div><Card /><Card /><Card /><Card /></div>

      </div>
    );
  }
}

export default App;
