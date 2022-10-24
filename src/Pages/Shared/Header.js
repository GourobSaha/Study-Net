import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Header = () => {
    return (
        <Navbar bg="warning" expand="lg">
            <Container className='my-2'>
                <Link to='/' className='text-decoration-none fw-bold text-dark fs-5'>STUDY NET</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Home</Button></Link>
                        <Link to='/courses' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Courses</Button></Link>
                        <Link className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">FAQ</Button></Link>
                        <Link className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Login</Button></Link>
                        <Link className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Register</Button></Link>
                    </Nav>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="light my-1">Light</Button>
                        <Button variant="secondary my-1">Dark</Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;