import React, { Component } from 'react';
import './App.css';
import Router from './scenes/router';
//components
import TopNavBar from './components/topNavBar/topNavBar';
//services
import AppMsg from './services/appMsg/appMsg';

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
        <AppMsg/>
        <div className="container">
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
