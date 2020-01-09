import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { logIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Signinpage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        console.log(this.state);
        this.props.logIn(this.state)
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    render() {
        if (this.props.auth.uid) return <Redirect to ='/' />
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
                    sign in!
                </Button>
                </Form>
                <div>{ this.props.authError ? <p>{ this.props.authError }</p> : null }</div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authenticate.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => dispatch(logIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signinpage);
