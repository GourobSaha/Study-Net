import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { HiUsers, HiStar, HiOutlineShoppingCart } from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import image7 from '../../Images/delivery_express_vespa_scooter_deliver_icon_192827.png'
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const CheckOut = () => {
    //Private Route Only Authenticated users can access this route.
    const checkOutDetails = useLoaderData();
    const { course_name, img, description, price, enrolled, rating } = checkOutDetails;

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Successfully Added To Cart');
    }

    return (
        <Container className='mb-5'>
            <Row className='g-4'>
                <Col lg='6' md='12'>
                    <Card className="text-center">
                        <Card.Header>
                            <h4>{course_name}</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={img} />
                            <Card.Title><h2>{course_name}</h2></Card.Title>
                            <Card.Text className='text-start'>
                                {description}
                            </Card.Text>
                            <h3>Price: ${price}</h3>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-evenly'>
                            <p><HiUsers className='text-primary' /> Students: {enrolled}</p>
                            <p><HiStar className='text-warning' /> Rating: {rating}</p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg='6' md='12'>
                    <Card className="text-center border border-0">
                        <Card.Body>
                            <Card.Img variant="top w-75 mb-2" src={image7} />
                            <Card.Title><h2>Purchasing {course_name}</h2></Card.Title>
                            <h3>Price: ${price}</h3>
                            <Form onSubmit={handleSubmit} className='px-3'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="test" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Address" required />
                                </Form.Group>
                                <Button variant="success" type="submit"><HiOutlineShoppingCart /> Check Out</Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;