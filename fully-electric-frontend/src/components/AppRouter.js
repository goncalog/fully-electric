import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import EVs from './EVs';
import Contact from './Contact';
import Navigation from './Navigation';
import EV from './EV';

function AppRouter() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/content/evs' exact component={EVs}></Route>
                <Route path='/content/ev/:id' exact component={EV}></Route>
                <Route path='/contact' exact component={Contact}></Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
