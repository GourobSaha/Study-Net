import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image8 from '../../Images/support_question_faq_list_frequently_icon_192885.png'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
    //Frequently Ask Question 
    return (
        <Container className='my-5'>
            <Row>
                <Col lg='6' md='12'>
                    <img className='img-fluid' src={image8} alt="" />
                </Col>
                <Col lg='6' md='12'>
                    <Container>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What languages is Study Net available in?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Our long-term goal is to have full-featured Study Net platforms in the world's languages. We have sites in English and the languages below, and are working on others as well.
                                    <ul>
                                        <li>বাংলা (Bangla)</li>
                                        <li>English </li>
                                        <li>हिंदी (Hindi)</li>
                                        <li>Español (Spanish)</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Are there plans to align translated content to national standards?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Many of our translated language sites have mapped the content to the national curriculum for key countries that speak that language.  If you are in those countries, that is what you will see in the menu of courses on the Study Net site. We expect to continue to introduce curriculum aligned sites for more languages. Our Curriculum Management System allows Language Advocates to align translated content to local curricula once they have translated enough content.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Where can I go for help?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    If you find you have a question about a paid course while you're taking it, you can search for answers to your question in the Q&A or ask the instructor.

                                    Our Help Center has extensive information regarding Study Net's various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there any way to preview a course?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Yes! You click on the <Link to='/courses'>Courses</Link> from the navigation bar and can view all the courses. To know more about the courses you need to click on view details button. After than you can review course details of the particular course.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;