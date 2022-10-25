import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../../Images/business-women-signature-document.jpg'
import image2 from '../../Images/coding-man.jpg'
import image3 from '../../Images/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying.jpg'
import image4 from '../../Images/workspace_table_study_work_furniture_icon_209731.png'
import image5 from '../../Images/exam_sheet_test_school_study_icon_209259.png'
import image6 from '../../Images/teacher_education_school_lecture_student_icon_141984.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark mb-1'>
                        <h3>Learn With Fun</h3>
                        <p>Our program is created to make learning more enjoyable</p>
                        <Link to='/courses'><Button variant="warning">Get Started</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src={image2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark mb-1'>
                        <h3>Be More Creative</h3>
                        <p>Our program is created to make learning more creative</p>
                        <Link to='/courses'><Button variant="warning">Get Started</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src={image3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark mb-1'>
                        <h3>Confidence Will Pursue</h3>
                        <p>Our program is created to make you more confident</p>
                        <Link to='/courses'><Button variant="warning">Get Started</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='text-center'>
                <h2 className='my-4'>Features of Study Net</h2>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top p-3" src={image4} />
                        <Card.Body>
                            <Card.Title>Organized Study Materials</Card.Title>
                            <Card.Text>
                                Organizes study materials will help the students easily navigate through out our courses.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top p-3" src={image5} />
                        <Card.Body>
                            <Card.Title>Regular Assessments</Card.Title>
                            <Card.Text>
                                Multiple assignments are created to check the learning progress of a student.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top p-3" src={image6} />
                        <Card.Body>
                            <Card.Title>Best Teachers</Card.Title>
                            <Card.Text>
                                Each courses are taught by best teachers from the different part of the world.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </Container>
    );
};

export default Home;