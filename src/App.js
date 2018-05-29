import React, { Component } from 'react';

import Router from './scenes/router';
import TopNavBar from './components/topNavBar/topNavBar';

import './App.css';

class App extends Component {
  componentDidMount() {
    fetch(process.env.REACT_APP_API_PATH + "user/")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <TopNavBar/>
        <div className="container">
          <Router/>
        </div>
        
      </div>
    );
  }
}

export default App;
