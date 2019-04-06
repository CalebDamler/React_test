import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Profile">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Profile.js
          </p>
        </div>
 
      </div>
    );
  }
}

export default Profile;