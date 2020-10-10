import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import EVs from './EVs';
import Contact from './Contact';
import Auth from './Auth';
import Navigation from './Navigation';
import EV from './EV';
import LogOut from './LogOut';
import withAuth from './support_components/withAuth';

function AppRouter() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authState, setAuthState] = useState(false);

    const handleAuthChange = () => {setAuthState(!authState)};

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
                    console.log('User not logged in');
                    setLoggedIn(false);
                }
            })
            .catch(err => {
                console.error(err);
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
                <Route 
                    path='/seller/signup'
                    exact
                    render={(props) => (<Auth onAuth={handleAuthChange} {...props} />)}
                >
                </Route>
                <Route 
                    path='/seller/login'
                    exact
                    render={(props) => (<Auth onAuth={handleAuthChange} {...props} />)}
                >
                </Route>
                <Route 
                    path='/seller/logout'
                    exact 
                    render={(props) => (<LogOut onAuth={handleAuthChange} {...props} />)}
                >
                </Route>
                <Route path='/seller/evs' component={withAuth(EVs)}></Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
