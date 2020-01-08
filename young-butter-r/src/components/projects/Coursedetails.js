import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'
import Breakdowns from './Breakdowns.js'
import { Redirect } from 'react-router-dom'

const Coursedetails = (props) => {
    console.log(props);
    if (!props.auth.uid) return <Redirect to ='/signin' />
    const id = props.match.params.id;
    // destructure to get data from mapStateToProps
    const { course } = props;
    
    return (course ? (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> {course.courseName } </Card.Title>
                    <div><hr/></div>
                    <Card.Text>Final percent contribution: { course.final }%</Card.Text>
                    <Addbreakdowns id={ id } />
                    <Breakdowns userId = {props.auth.uid} courseId={ id } final={ course.final }/>
                </Card.Body>
            </Card>
        </Container>
    ) : (<p>loading le course!</p>))
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