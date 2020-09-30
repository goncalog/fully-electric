import React from 'react';
import logo from '../media/logo.svg';
import '../css/Navigation.css';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
    return (
        <div className="navigation">
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                        Fully Electric
                    </Link>
                    <Navbar.Toggle aria-controls="navbarResponsive"/>
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ml-auto">
                            <Nav.Item
                                className={`${
                                    props.location.pathname === "/" ? "active" : "" 
                                }`}
                            >
                                <Nav.Link href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item 
                                className={`${
                                    props.location.pathname === "/content/evs" ? "active" : "" 
                                }`}
                            >
                                <Nav.Link href="/content/evs">
                                    All EVs
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item 
                                className={`${
                                    props.location.pathname === "/contact" ? "active" : "" 
                                }`}
                            >
                                <Nav.Link href="/contact">
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default withRouter(Navigation);
