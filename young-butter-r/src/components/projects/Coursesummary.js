import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const Coursesummary = ({course}) => {
    return(
        <Row className="justify-content-center">
            <Card>
                <Card.Body>
                    <Link to={'/course/' + course.id} className="text-link">
                        <div className="special">{course.courseName}</div>
                    </Link>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Coursesummary;