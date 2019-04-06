import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Inbox from "./pages/Inbox";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Landing}></IndexRoute> 
            <Route path="Profile" component={Profile}></Route>
            <Route path="Inbox" component={Inbox}></Route>
            <Route path="Home" component={Home}></Route>
            <Route path="Blog" component={Blog}></Route>
        </Route>
    </Router>, 
    document.getElementById('root'));
    // Home/send-time-capsule
    // Home/Blog-post
    // Blog/read/blogID=1


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
