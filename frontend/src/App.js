import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import { HashRouter as Router, Link, Route,Redirect } from "react-router-dom";
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App container">
      { //auth check -- redirect to localhost:3000/feed or localhost:3000/login
      }
      
      <Router>
        <Route exact path="/">
          <Redirect to = "/home"/>
        </Route>
        <Route path="/login" component = {LoginComponent}/>
        <Route path="/register" component = {RegistrationComponent}/>
        <Route path="/home" component = {HomeComponent}/>
      </Router>
    </div>
  );
}

export default App;
