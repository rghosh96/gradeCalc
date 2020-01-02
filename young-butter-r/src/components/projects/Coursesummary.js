import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const Coursesummary = ({course}) => {
    return(
        <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{course.courseName}</Card.Title>
                    <Card.Text>
                    {course.numBreakdowns}
                    </Card.Text>
                    <Button variant="pink">Details</Button>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Coursesummary;