import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const Coursesummary = () => {
    return(
        <Row className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Operating Systems</Card.Title>
                    <Card.Text>
                    This is description!! yay!!!
                    </Card.Text>
                    <Button variant="pink">Details</Button>
                </Card.Body>
            </Card>
            <Card>
            <Card.Body>
                    <Card.Title>Software Engineering</Card.Title>
                    <Card.Text>
                    This is description!! yay!!!
                    </Card.Text>
                    <Button variant="pink">Details</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Artificial Intelligence</Card.Title>
                    <Card.Text>
                    This is description!! yay!!!
                    </Card.Text>
                    <Button variant="pink">Details</Button>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Coursesummary;