import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/App.css';
import Navigation from '../components/Navigation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
