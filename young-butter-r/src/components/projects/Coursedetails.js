import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'

const Coursedetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    // destructure to get data from mapStateToProps
    const { course } = props;
    return (course ? (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title> {course.courseName } </Card.Title>
                    <div><hr/></div>
                    <Card.Text>Number of breakdowns: { course.numBreakdowns }</Card.Text>
                    <Addbreakdowns id={ id }/>
                    <p>[ from your courses ]</p>
                </Card.Body>
            </Card>
        </Container>
    ) : (<p>loading le course!</p>))
}

const mapStateToProps = (state, ownProps) => {
    // identify particular course we are trying to get
    const id = ownProps.match.params.id;
    // get all courses from database
    const courses = state.firestore.data.courses;
    // get that particular course from db
    const displayedCourse = courses ? courses[id] : null;
    return {
        course: displayedCourse
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['courses'])
)(Coursedetails);