import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Coursesummary from './Coursesummary.js'
import Coursedetails from './Coursedetails.js'

const Courseslist = () => {
    return (
        <Container>    
                <Coursesummary />
                <Coursedetails />
        </Container>
    )
}

export default Courseslist;