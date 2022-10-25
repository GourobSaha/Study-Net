import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import GoogleGithubLogin from './GoogleGithubLogin';

const Login = () => {
    return (
        <Container style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center w-100">
            <div className='p-3 shadow rounded-4 border border-warning'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="warning w-100" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='text-muted mt-2 text-center'>Don't have an account? <Link to='/register'>Please Register</Link></p>
                <div className='mt-3'>
                    <GoogleGithubLogin></GoogleGithubLogin>
                </div>
            </div>
        </Container>
    );
};

export default Login;