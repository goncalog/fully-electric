import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import EVs from './EVs';
import Contact from './Contact';
import Auth from './Auth';
import Navigation from './Navigation';
import EV from './EV';
import withAuth from './support_components/withAuth';

function AppRouter() {
    const [loggedIn, setLoggedIn] = useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        let url = (process.env.NODE_ENV === 'production')
                ? '/content/seller/checkAuth' 
                : `${process.env.REACT_APP_SERVER_URL}/content/seller/checkAuth`;

        fetch(url, { credentials: 'include' })
            .then(res => {
                if (res.status === 200) {
                    setLoggedIn(true);
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                setLoggedIn(false);
            });
      });

    return (
        <Router>
            <Navigation loggedIn={loggedIn}/>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/evs' exact component={EVs}></Route>
                <Route path='/ev/:id' exact component={EV}></Route>
                <Route path='/contact/seller/:id' exact component={Contact}></Route>
                <Route path='/seller/signup' exact component={Auth}></Route>
                <Route path='/seller/login' exact component={Auth}></Route>
                <Route path='/seller/evs' component={withAuth(EVs)}></Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
