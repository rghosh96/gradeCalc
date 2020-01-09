import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'
import Breakdowns from './Breakdowns.js'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const Coursedetails = (props) => {
    console.log(props);
    if (!props.auth.uid) return <Redirect to ='/welcome' />
    const id = props.match.params.id;
    // destructure to get data from mapStateToProps
    const { course } = props;
    
    return (course ? (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> {course.courseName } </Card.Title>
                    <Card.Text>
                    <hr></hr>Final percent contribution: { course.final }%</Card.Text>
                    <Addbreakdowns id={ id } />
                    <Breakdowns userId = {props.auth.uid} courseId={ id } final={ course.final }/>
                </Card.Body>
            </Card>
        </Container>
    ) : (<div>
        <Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="dark" />
  </div>))
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    // identify particular course we are trying to get
    const id = ownProps.match.params.id;
    console.log(id)
    // get all courses from database
    const courses = state.firestore.data.userCourse;
    console.log(courses)
    // get that particular course from db
    const displayedCourse = courses ? courses[id] : null;
    // console.log(theBreakdown);
    return {
        course: displayedCourse,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(),
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
    } else {
        return [ { collection: 'courses'}]
    }})
)(Coursedetails);