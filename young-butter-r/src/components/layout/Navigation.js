import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Signedinlinks from './Signedinlinks.js'
import Signedoutlinks from './Signedoutlinks.js'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/" className="text-link">grade calc</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Signedinlinks />
            <Signedoutlinks />
        </Navbar.Collapse>
        
        </Navbar>
    );
}

export default Navigation;