import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Addbreakdowns from './Addbreakdowns.js'

const Breakdowns = (props) => {
    console.log(props)
    var breakdowns = [];
    for (var key in props.breakdowns) {
        breakdowns.push(props.breakdowns[key]);
    }
    var final = props.course.final/100;
    var total = 0;
    var pTotal = 0;
    var mcTot = final*100;
    var A = 90;
    var B = 80;
    var C = 70;
    
    console.log(final)
    for (var i in breakdowns) {
        console.log(mcTot)
        pTotal = pTotal + ((breakdowns[i].percent/100));
        total = total + ((breakdowns[i].percent/100)*(breakdowns[i].score/100));
        mcTot = mcTot + Number(breakdowns[i].percent);
        
    }

    total = (total / pTotal)*100;
    var wantA = (A - total * (1 - final)) / final;
    var wantB = (B - total * (1 - final)) / final;
    var wantC = (C - total * (1 - final)) / final;

    return (
        <Container>    
            {/* cycle through courses if exists */}
            { breakdowns && breakdowns.map(breakdown => {
                return (
                    /* pass down each course into coursesummary */
                    <div>
                        Type: {breakdown.type} || 
                        Percent: {breakdown.percent} || 
                        Your Score: {breakdown.score}
                    </div>
                )
            })}
            <br></br>
            { mcTot === 100 ?  
                <div>total: {mcTot}</div> : <div>not enough points! {mcTot}</div> }
            <div>Your current grade: { total }</div>
            <div>For an A: { wantA }</div>
            <div>For a B: { wantB }</div>
            <div>For a C: { wantC }</div>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    console.log(state);
    // identify particular course we are trying to get
    const id = ownProps.id;
    // get all courses from database
    const breakdowns = state.firestore.data.breakdowns;
    const courses = state.firestore.data.courses;
    // get that particular course from db
    const displayedCourse = courses ? courses[id] : null;
    const displayedBreakdowns = breakdowns ? breakdowns : null;
    console.log(displayedBreakdowns);
    return {
        breakdowns: displayedBreakdowns,
        course: displayedCourse
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props =>[   
        {
            collection: 'courses',
            doc: props.id,
            subcollections: [
              { collection: 'breakdowns' },
            ],
            storeAs: 'breakdowns'
          }
    ])
)(Breakdowns);