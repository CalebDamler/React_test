import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Blog extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Blog">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Blog.js
          </p>
        </div>
      </div>
    );
  }
}

export default Blog;