import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Signuppage extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
                <h1>sign up!</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    <Form.Group controlId="firstName">
                        <Form.Label>first name</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} placeholder="u ardy kno" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="lastName">
                        <Form.Label>last name</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} placeholder="iykyk!" />
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="email">
                    <Form.Label>email address</Form.Label>
                    <Form.Control type="email" onChange={this.handleInput} placeholder="pls enter ur email!" />
                    <Form.Text className="text-muted">
                    the email you signed up with
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password"onChange={this.handleInput} placeholder="pls enter ur password!" />
                </Form.Group>
                <Button variant="pink" type="submit">
                    log in!
                </Button>
                </Form>
            </Container>
        )
    }
}

export default Signuppage;
