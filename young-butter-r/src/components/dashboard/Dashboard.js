import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Notifications from './Notifications.js'
import Addcourse from '../projects/Addcourse.js'
import Courseslist from '../projects/Courseslist.js'
// connect component to store
import { connect } from 'react-redux'
// connect to firestore
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        console.log(this.props);

        // destructure props and store courses object in var called courses
        const { courses } = this.props;

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
                        <Courseslist courses={ courses }/>
                    </Col>
                    <Col>
                        <br></br>
                        <Notifications />
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
        courses: state.firestore.ordered.courses,
    }
}

// higher order state taking in component as parameter
// compose higher order components (redux and firebase)
export default compose(
    connect(mapStateToProps), 
    firestoreConnect(() => ['courses'])
)(Dashboard);