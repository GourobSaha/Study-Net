import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import GoogleGithubLogin from './GoogleGithubLogin';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //Handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // console.log(name, email, photoURL, password);
        //Creating User
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                handleUpdateProfile(name, photoURL);
                toast.success('Successfully Signed Up');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
    }
    //Profile Update
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Container style={{ height: "700px" }}
                className="d-flex justify-content-center align-items-center w-100">
                <div className='p-3 shadow rounded-4 border border-warning'>
                    <h2 className='text-center'>Registration</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                        </Form.Group>
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