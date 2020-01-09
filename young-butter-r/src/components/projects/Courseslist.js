import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Coursesummary from './Coursesummary.js'


const Courseslist = ({ courses, auth }) => {
    console.log(courses)
    return (
        <Container>    
            {/* cycle through courses if exists */}
            { courses && courses.map(course => {
                return (
                    /* pass down each course into coursesummary */
                    <Coursesummary course={ course } auth ={ auth } key={ course.id }/>
                )
            })}
        </Container>
    )
}

export default Courseslist;