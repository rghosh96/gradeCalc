import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { deleteCourse } from '../../store/actions/courseActions'
import { connect } from 'react-redux'

const Coursesummary = (props) => {
    console.log(props)
    return(
        <Row className="justify-content-center">
            <Card>
                <Card.Body>
                    <Link to={'/course/' + props.course.id} className="text-link">
                        <div className="special">{props.course.courseName}</div>
                        <div className="special">final: {props.course.final}%</div>
                    </Link>
                    <Button variant="simple"  onClick={() => { props.deleteCourse(props.course.id) }}>[delete]</Button>
                </Card.Body>
            </Card>
        </Row>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourse: (course) => dispatch(deleteCourse(course))
    }
}

export default connect(null, mapDispatchToProps)(Coursesummary);