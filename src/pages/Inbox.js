import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Inbox extends Component {
  render() {
    return (
      <div className="App" >
        <div className="App-Inbox">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Inbox.js</p>
        </div>
      </div>
    );
  }
}

export default Inbox;