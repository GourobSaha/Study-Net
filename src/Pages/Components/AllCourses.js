import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const AllCourses = ({ course }) => {

    console.log(course)
    const { course_name, img, description, price } = course;

    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 80)}...
                    </Card.Text>
                    <h5>${price}</h5>
                    <Link><Button variant="warning">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllCourses;