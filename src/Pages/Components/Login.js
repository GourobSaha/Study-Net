import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import GoogleGithubLogin from './GoogleGithubLogin';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //Handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, photoURL, password);
        //User Sign in
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
    }
    return (
        <Container style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center w-100">
            <div className='p-3 shadow rounded-4 border border-warning'>
                <h2 className='text-center'>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger text-center">
                        <p>{error}</p>
                    </Form.Text>
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