import React, { useState } from 'react';
import logo from '../media/logo.svg';
import '../css/Navigation.css';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="navigation">
            <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={() => setExpanded(false)}>
                        <img src={logo} className="App-logo" alt="logo" />
                        Fully Electric
                    </Link>
                    <Navbar.Toggle 
                        onClick={() => setExpanded(expanded ? false : "expanded")} 
                        aria-controls="navbarResponsive"
                    />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ml-auto">
                            <Nav.Item
                                className={`${
                                    props.location.pathname === "/" ? "active" : "" 
                                }`}
                            >
                                <Link className="nav-link" to="/" onClick={() => setExpanded(false)}>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </Nav.Item>

                            <Nav.Item 
                                className={`${
                                    props.location.pathname === "/content/evs" ? "active" : "" 
                                }`}
                            >
                                <Link 
                                    className="nav-link" 
                                    to="/content/evs" 
                                    onClick={() => setExpanded(false)}
                                >
                                    All EVs
                                </Link>
                            </Nav.Item>

                            <Nav.Item 
                                className={`${
                                    props.location.pathname === "/contact" ? "active" : "" 
                                }`}
                            >
                                <Link 
                                    className="nav-link" 
                                    to="/contact" 
                                    onClick={() => setExpanded(false)}
                                >
                                    Contact
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default withRouter(Navigation);
