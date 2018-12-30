import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Character from './components/character/Character'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Character />
      </div>
    );
  }
}

export default App;
