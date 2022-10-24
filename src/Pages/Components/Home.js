import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../Images/business-women-signature-document.jpg'
import image2 from '../../Images/coding-man.jpg'
import image3 from '../../Images/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <div>
                <Carousel>
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
            </div>
            <div>

            </div>
        </Container>
    );
};

export default Home;