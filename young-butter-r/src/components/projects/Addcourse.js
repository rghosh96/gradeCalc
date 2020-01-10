import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { addCourse } from '../../store/actions/courseActions'
import { Redirect } from 'react-router-dom'

class Addcourse extends Component {
    state = {
        courseName: '',
        final: null
    }

    handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        console.log(this.state);
        // addCourse from actions! take in user as well!
        this.props.addCourse(this.props.auth.uid, this.state);
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    render() {
        if (!this.props.auth.uid) return <Redirect to ='/welcome' />
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    {/* controId sets both id and htmlFor */}
                    <Form.Group controlId="courseName">
                        <Form.Label>course name</Form.Label>
                        <Form.Control required type="text" onChange={this.handleInput} placeholder="name of course" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="final">
                        <Form.Label>final %</Form.Label>
                        <Form.Control required type="number" min="0" max="100" onChange={this.handleInput} placeholder="enter a number" />
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (user, course) => dispatch(addCourse(user, course))
    }
}

// first param is mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Addcourse);
