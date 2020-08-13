import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from './Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Routes />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
