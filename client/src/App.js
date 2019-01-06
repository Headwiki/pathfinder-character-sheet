import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Character from './components/character/Character'
import AbilityScores from './components/character/AbilityScores.Character';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="navbar">
            <ul>
              <li><Link to={'/'}>Raw data</Link></li>
              <li><Link to={'/abilityscores'}>Abilityscores</Link></li>
            </ul>
          </div>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Character} />
              <Route exact path='/abilityscores' component={AbilityScores} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
