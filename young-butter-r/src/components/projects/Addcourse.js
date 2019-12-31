import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Addcourse extends Component {
    state = {
        courseName: '',
        numBreakdown: null
    }

    handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        console.log(this.state);
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <br></br>
                <h1>add course!</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    <Form.Group controlId="courseName">
                        <Form.Label>course name</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} placeholder="name of course" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="numBreakdown">
                        <Form.Label># of breakdowns</Form.Label>
                        <Form.Control type="number" min="1" max="10" onChange={this.handleInput} placeholder="enter a number" />
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="pink" type="submit">
                    submit!
                </Button>
                </Form>
            </Container>
        )
    }
}

export default Addcourse;
