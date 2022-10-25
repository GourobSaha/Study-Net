import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logoIcon from "../../Images/laptop_computer_books_study_pc_icon_209270.png"
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserGraduate } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );
    return (
        <Navbar bg="warning" expand="lg" className='mb-4'>
            <Container className='my-2'>
                <Link to='/' className='d-flex align-items-center text-decoration-none fw-bold text-dark fs-5'><img src={logoIcon} alt="logo" /> STUDY NET</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Home</Button></Link>
                        <Link to='/courses' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Courses</Button></Link>
                        <Link to='/faq' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">FAQ</Button></Link>
                        <Link to='/blogs' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Blogs</Button></Link>
                        {
                            user?.uid ?

                                <>
                                    <div className='my-auto mx-1'>
                                        {user?.photoURL ?
                                            <OverlayTrigger
                                                placement="bottom"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip}
                                            >
                                                <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                            </OverlayTrigger>
                                            :
                                            <OverlayTrigger
                                                placement="bottom"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip}
                                            >
                                                <FaUserGraduate></FaUserGraduate>
                                            </OverlayTrigger>
                                        }
                                    </div>
                                    <Button onClick={handleLogOut} variant="outline-danger my-1">Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Login</Button></Link>
                                    <Link to='/register' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Register</Button></Link>
                                </>
                        }

                    </Nav>
                    <ButtonGroup aria-label="Basic example" className='mx-2'>
                        <Button variant="light my-1">Light</Button>
                        <Button variant="secondary my-1">Dark</Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;