import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Switch>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
