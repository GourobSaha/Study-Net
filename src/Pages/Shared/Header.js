import React, { useState } from 'react';
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
import ToggleButton from 'react-bootstrap/ToggleButton';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Light', value: '1' },
        { name: 'Dark', value: '2' }
    ];


    //Handle Logout Button
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    //Tooltip rendering
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
                                    <Link onClick={handleLogOut} ><Button variant="outline-danger my-1 me-2">Logout</Button></Link>
                                </>
                                :
                                <>
                                    <Link to='/login' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Login</Button></Link>
                                    <Link to='/register' className='text-decoration-none fw-semibold me-2'><Button variant="outline-secondary my-1">Register</Button></Link>
                                </>
                        }

                        <ButtonGroup className='my-1'>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-secondary' : 'outline-light'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;