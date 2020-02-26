import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Signedoutlinks = () => {
    return (
        <Nav className="ml-auto">
            <Link to="/signup" className="nav-link">sign up!</Link>
            <Link to="/signin"className="nav-link">log in!</Link>
            <Link to="/" className="circle">???</Link>
        </Nav>
    );
}

export default Signedoutlinks;