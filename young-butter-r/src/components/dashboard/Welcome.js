import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
      <Container className="welcome">
        <Row className="d-flex align-items-start justify-content-center">
            <Col>
            
                <h1>grade calc</h1>
                <hr></hr>
                <p>welcome to grade calc! this is a tool to help you calculate what u will need on the final for a particular class
                  in order to achieve a desired overall grade in the class. you can save your lists of classes and their final contributions,
                  and then enter the course breakdowns (ex, quizzes, homework, attendance, etc), your grade in these areas, and their percent
                  contributions to the overall course.
                </p>
                <p>in order to use grade calc, u will need an account! it's free! proceed by signing up or signing in.</p>
                <center>
                  <Link to="/signup"> <Button variant="pink">sign me up!</Button> </Link>
                  <Link to="/signin"> <Button variant="pink">sign me in!</Button> </Link>
                </center>
            </Col>
        </Row>
      </Container>
  );
}

export default Welcome;
