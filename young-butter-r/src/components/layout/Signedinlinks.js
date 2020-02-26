import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const Signedinlinks = (props) => {
    console.log(props)
    return (
        <Nav className="ml-auto">
            <Link to="/" className="nav-link">dashboard</Link>
            <a onClick={ props.logOut } className="nav-link">sign out</a>
            <Link to="/" className="circle">{ props.profile.initials }</Link>
        </Nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Signedinlinks);