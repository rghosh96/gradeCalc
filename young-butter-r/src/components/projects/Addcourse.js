import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import addCourse from '../../store/actions/courseActions'

class Addcourse extends Component {
    state = {
        courseName: '',
        final: null
    }

    handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        console.log(this.state);
        // addCourse from actions!
        this.props.addCourse(this.state);
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
                    <Form.Group controlId="courseName">
                        <Form.Label>course name</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} placeholder="name of course" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="final">
                        <Form.Label>final %</Form.Label>
                        <Form.Control type="number" onChange={this.handleInput} placeholder="enter a number" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (course) => dispatch(addCourse(course))
    }
}

// first param is mapStateToProps
export default connect(null, mapDispatchToProps)(Addcourse);
