import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'

class Breakdowns extends Component {
    state = {
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
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    {/* controId sets both id and htmlFor */}
                    <Form.Group controlId="num">
                        <Form.Label>course name</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} placeholder="name of course" />
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


// first param is mapStateToProps
export default Breakdowns;
