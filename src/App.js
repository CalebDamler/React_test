import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is my header</h1>
          <p>Clicking the buttons only re-renders the page component</p>
          <p>The header, Footer, and Nav buttons do not get re-rendered</p>
        </header>

          <Link to="Home"><button>Home </button></Link>
          <Link to="Profile"><button>Profile </button></Link>
          <Link to="Inbox"><button>Inbox </button></Link>
          <Link to="Blog"><button>Blog </button></Link>
          
          
          {this.props.children}
  
        <footer className="App-footer">
          <h1>This is my footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
