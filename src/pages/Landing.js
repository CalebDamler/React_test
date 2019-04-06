import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Landing.js
          </p>
 
      </div>
    );
  }
}

export default Landing;