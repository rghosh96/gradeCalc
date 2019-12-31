import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Signedinlinks = () => {
    return (
        <Nav className="ml-auto">
            <Link to="/Addcourse" className="nav-link">add course</Link>
            <Link to="/"className="nav-link">sign out</Link>
            <Link to="/" className="circle">RG</Link>
        </Nav>
    );
}

export default Signedinlinks;