import React, { Component } from 'react';
import './App.css';
import Router from './scenes/router';
//components
import TopNavBar from './components/topNavBar/topNavBar';
//services
import AppMsg from './services/appMsg/appMsg';
//scenes

class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar/>
        <AppMsg/>
        <div className="container">
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
