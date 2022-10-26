import React from 'react';
import logoIcon from "../../Images/laptop_computer_books_study_pc_icon_209270.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="w-100 bg-dark text-white py-4 mt-auto">
            <Container className='my-3'>
                <Row>
                    <Col lg='4' md='12'>
                        <h4 className='text-warning'><img src={logoIcon} alt="logo" />STUDY NET</h4>
                        <p>©Copyright 2023, All Rights Reserved to Study Net.</p>
                        <div className="mx-1 fs-5">
                            <Link className='text-warning'><FaFacebook /></Link>
                            <Link className="mx-3 text-warning"><FaTwitter /></Link>
                            <Link className='text-warning'><FaYoutube /></Link>
                        </div>
                    </Col>
                    <Col lg='4' md='12'>
                        <h5>Contact Us</h5>
                        <p>Address: Banani, Dhaka</p>
                        <p>Phone: +88017-002211</p>
                        <p>Email: studynet@gmail.com</p>
                    </Col>
                    <Col lg='4' md='12'>
                        <h5>About Us</h5>
                        <p>We are online an learning platform, where you can learn with fun and gain more confidence to thrive in the world. Learn with the help of the best teachers around the globe. Our organized study materials will mesmerize you.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;