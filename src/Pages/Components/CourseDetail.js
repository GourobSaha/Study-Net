import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiUsers, HiStar, HiDownload } from "react-icons/hi";

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    const { course_name, description, img, price, enrolled, rating } = courseDetail;
    return (
        <div>
            <Card className="text-center">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h4>{course_name}</h4>
                    <h5>Download PDF <Button variant="warning"><HiDownload /></Button></h5>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={img} />
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text className='text-start'>
                        {description}
                    </Card.Text>
                    <h5>${price}</h5>
                    <Button variant="warning">Get Premium Access</Button>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-evenly'>
                    <p><HiUsers className='text-primary' /> Students: {enrolled}</p>
                    <p><HiStar className='text-warning' /> Rating: {rating}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetail;