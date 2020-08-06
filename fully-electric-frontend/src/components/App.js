import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.svg';
import '../css/App.css';
import Navigation from '../components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
