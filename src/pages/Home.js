import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-Home">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Home.js
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
