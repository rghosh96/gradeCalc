import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { addBreakdown } from '../../store/actions/breakdownActions'

class Addbreakdowns extends Component {
    state = {
        type: null,
        percent: null,
        course: null
    }

    handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        console.log(this.state);
        // addCourse from actions!
        this.props.addBreakdown(this.props.auth.uid, this.state);
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.id]: e.target.value,
            course: this.props.id
        })
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    {/* controId sets both id and htmlFor */}
                    <Form.Group controlId="type">
                        <Form.Label>type</Form.Label>
                        <Form.Control required type="text" onChange={this.handleInput} placeholder="grade type" />
                    </Form.Group>
                    </Col>
                    <Col>
                    {/* controId sets both id and htmlFor */}
                    <Form.Group controlId="percent">
                        <Form.Label>percent of course</Form.Label>
                        <Form.Control required type="number" min="0" max="100" onChange={this.handleInput} placeholder="percent contribution" />
                    </Form.Group>
                    </Col>
                    <Col>
                    {/* controId sets both id and htmlFor */}
                    <Form.Group controlId="score">
                        <Form.Label>your percentage</Form.Label>
                        <Form.Control required type="number" min="0" max="100" onChange={this.handleInput} placeholder="your current score" />
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="pink" type="submit">
                    submit!
                </Button>
                </Form>
                <hr></hr>
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
        addBreakdown: (user, breakdown) => dispatch(addBreakdown(user, breakdown))
    }
}

// first param is mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Addbreakdowns);
