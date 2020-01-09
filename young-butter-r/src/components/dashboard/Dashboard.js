import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Addcourse from '../projects/Addcourse.js'
import Courseslist from '../projects/Courseslist.js'
// connect component to store
import { connect } from 'react-redux'
// connect to firestore
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        console.log(this.props);

        // destructure props and store courses object in var called courses
        const { users, auth } = this.props;

        // redirect if NOT logged in
        if (!auth.uid) return <Redirect to ='/welcome' />
        return (
            <Container>
                <Row className="d-flex align-items-start">
                    <Col>
                    <br></br>
                    <h1 className="center">add course!</h1>
                    <hr></hr>
                        <Addcourse />
                    </Col>
                    <Col>
                        <br></br>
                        <h1 className="center">your courses</h1> 
                        <hr></hr>
                        <p className="center">click on the course for more details!</p>
                        <Courseslist courses={ users }/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

// map store state to props; takes in state of store & returns object representing properties
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // map a property called courses to the courses property in rootReducer, to its courses object
        users: state.firestore.ordered.userCourse,
        // check if logged in
        auth: state.firebase.auth
    }
}

// higher order state taking in component as parameter
// compose higher order components (redux and firebase)
export default compose(
    connect(mapStateToProps), firebaseConnect(),
    firestoreConnect(props => {
        console.log(props)
        if (props.auth.uid) {
        return [
            {
              collection: 'users',
              doc: props.auth.uid,
              subcollections: [
                { collection: 'courses' }
              ],
              storeAs: 'userCourse'
            }
          ]
    }
else {
    return [ { collection: 'courses'}]
}})
)(Dashboard);