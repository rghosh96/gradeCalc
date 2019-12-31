import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Coursedetails = (props) => {
    // props contain details from router such as params etc!
    const id = props.match.params.id;
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>hello {id}</Card.Title>
                    <Card.Text>hi</Card.Text>
                    <hr></hr>
                    <p>[ from your courses ]</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Coursedetails;