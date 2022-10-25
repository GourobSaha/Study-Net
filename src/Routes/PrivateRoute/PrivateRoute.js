import React from 'react';
import { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Container style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" variant="warning" style={{ height: '50px', width: '50px' }} /></Container>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;