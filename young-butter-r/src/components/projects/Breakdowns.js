import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'
import { deleteBreakdown } from '../../store/actions/breakdownActions'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'

const Breakdowns = (props) => {
    console.log(props.breakdowns)
    var breakdowns = props.breakdowns
    console.log(breakdowns)
     if (breakdowns) {
    // var breakdowns = [];
    // for (var key in props.breakdowns) {  
    //     console.log(props.breakdowns[key].key)
    //     breakdowns.push(props.breakdowns[key]);
    // }

    
    var final = props.final/100;
    var total = 0;
    var pTotal = 0;
    var mcTot = final*100;
    var A = 90;
    var B = 80;
    var C = 70;
    
    console.log(final)
        for (var i in props.breakdowns) {
            if (props.breakdowns[i] !== null){
                pTotal = pTotal + ((breakdowns[i].percent/100));
                total = total + ((breakdowns[i].percent/100)*(breakdowns[i].score/100));
                mcTot = mcTot + Number(breakdowns[i].percent);
            }
            else {continue}
    }

    total = (total / pTotal)*100;
    var wantA = (A - total * (1 - final)) / final;
    var wantB = (B - total * (1 - final)) / final;
    var wantC = (C - total * (1 - final)) / final;
    }
    console.log(props.userId)
    console.log(props.courseId)
    return (
        <Container>    
            {/* cycle through courses if exists */}
            <Table responsive>
            <thead>
                <tr>
                <th>Type</th>
                <th>Percent Contribution</th>
                <th>Your score</th>
                <th>delete?</th>
                </tr>
            </thead>
            <tbody>
            { breakdowns && breakdowns.map(breakdown => {
                console.log(breakdowns);
                console.log(breakdown);
                if (breakdown !== null) {
                return (
                    /* pass down each course into coursesummary */
                    <tr>
                        <td>{breakdown.type} </td>
                        <td>{breakdown.percent} </td>
                        <td>{breakdown.score} </td>
                        <td><Button variant="simple" onClick={ () => { props.deleteBreakdown(props.userId, props.courseId, breakdown.id) }}> [delete] </Button></td>
                    </tr>
                )}
                else { return (<td>was deleted</td>)}
            })}
            </tbody>
            </Table>
            <br></br>

            { mcTot === 100 ?  
                <div>
                <h5>Your current grade: { total }</h5>
            <ProgressBar valuemax={A} animated now={total}/>
            <br></br>
            <h6>For an A: { wantA }</h6>
            <h6>For a B: { wantB }</h6>
            <h6>For a C: { wantC }</h6>
            </div> : 
            <div>
            <Alert variant="danger" >
            <b>invalid total number of points! </b>
            total running points for course must be out of 100. currently, it is out of only {mcTot}
        </Alert></div> }
            
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    console.log(state);
    // identify particular course we are trying to get
    const id = ownProps.courseId;
    // get all courses from database
    const courses = state.firestore.data.courses;
    // get that particular course from db
    const displayedCourse = courses ? courses[id] : null;
    return {
        course: displayedCourse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBreakdown: (user, courseId, brId) => dispatch(deleteBreakdown(user, courseId, brId))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(Breakdowns);