import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import GoogleGithubLogin from './GoogleGithubLogin';

const Register = () => {
    return (
        <div>
            <Container style={{ height: "700px" }}
                className="d-flex justify-content-center align-items-center w-100">
                <div className='p-3 shadow rounded-4 border border-warning'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='PhotoURL' type="text" placeholder="Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="warning w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    <p className='text-muted mt-2 text-center'>Already have an account? <Link to='/login'>Please Login</Link></p>
                    <div className='mt-3'>
                        <GoogleGithubLogin></GoogleGithubLogin>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;