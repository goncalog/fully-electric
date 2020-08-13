import React from 'react';
import logo from '../logo.svg';
import '../css/Navigation.css';
import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                        Fully Electric
                    </Link>
                    <button        
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li 
                                className={`nav-item ${
                                    props.location.pathname === "/" ? "active" : "" 
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>

                            <li 
                                className={`nav-item ${
                                    props.location.pathname === "/content/evs" ? "active" : "" 
                                }`}
                            >
                                <Link className="nav-link" to="/content/evs">
                                    All EVs
                                </Link>
                            </li>

                            <li 
                                className={`nav-item ${
                                    props.location.pathname === "/contact" ? "active" : "" 
                                }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);