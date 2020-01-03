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
    var total = 0;
    var A = 90;
    var B = 80;
    var C = 70;
    for (var i in breakdowns) {
        total = total + ((breakdowns[i].percent/100)*(breakdowns[i].score/100));
    }
    total = total*100
    
    var differenceA = A - total;
    var differenceB = B - total;
    var differenceC = C - total;

    var wantA = differenceA/(.2)
    var wantB = differenceB/(.2)
    var wantC = differenceC/(.2)

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
            <div>Your current grade: { total }</div>
            <div>For an A: { wantA }</div>
            <div>For an B: { wantB }</div>
            <div>For an B: { wantC }</div>
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
    // get that particular course from db
    const displayedBreakdowns = breakdowns ? breakdowns : null;
    console.log(displayedBreakdowns);
    return {
        breakdowns: displayedBreakdowns
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