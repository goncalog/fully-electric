import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import EVs from './EVs';
import Contact from './Contact';

function Routes() {
    return (
        <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/content/evs' exact component={EVs}></Route>
            <Route path='/contact' exact component={Contact}></Route>
        </Router>
    );
}

export default Routes;
