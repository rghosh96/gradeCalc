import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'
import Breakdowns from './Breakdowns.js'
import { Redirect } from 'react-router-dom'

const Coursedetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    // destructure to get data from mapStateToProps
    const { course } = props;
    if (!props.auth.uid) return <Redirect to ='/signin' />
    return (course ? (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> {course.courseName } </Card.Title>
                    <div><hr/></div>
                    <Card.Text>Final percent contribution: { course.final }%</Card.Text>
                    <Addbreakdowns id={ id } number={ course.numBreakdowns }/>
                    <Breakdowns id={ id }/>
                </Card.Body>
            </Card>
        </Container>
    ) : (<p>loading le course!</p>))
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    // identify particular course we are trying to get
    const id = ownProps.match.params.id;
    // get all courses from database
    const courses = state.firestore.data.courses;
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
    firestoreConnect([
        {collection: 'courses'},
    ])
)(Coursedetails);