import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class Signinpage extends Component {
    state = {
        email: '',
        password: ''
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
                <h1>sign in!</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>email address</Form.Label>
                    <Form.Control type="email" onChange={this.handleInput} placeholder="pls enter ur email!" />
                    <Form.Text className="text-muted">
                    the email you signed up with
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" onChange={this.handleInput} placeholder="pls enter ur password!" />
                </Form.Group>
                <Button variant="pink" type="submit">
                    log in!
                </Button>
                </Form>
            </Container>
        )
    }
}

export default Signinpage;
