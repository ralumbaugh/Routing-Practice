import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Word from './components/word';
import Home from './components/home';
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Word path="/:thing"/>
        <Banner path="/:message/:font/:bannercolor"/>
      </Router>
    </div>
  );
}

export default App;
