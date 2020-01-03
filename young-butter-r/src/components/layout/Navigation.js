import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// to connect to redux state which is already synced w fb from rootReducer
import { connect } from 'react-redux'
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

// to get status of authentication
const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Navigation);