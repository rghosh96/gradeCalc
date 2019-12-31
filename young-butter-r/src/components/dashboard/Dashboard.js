import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row className="d-flex align-items-center">
                    <Col className="d-flex justify-content-center">
                        <h1>your courses</h1> 
                    </Col>
                    <Col>
                        <p>below is a list of all the courses you entered:</p>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Dashboard;