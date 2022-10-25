import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav';

const CourseMain = () => {
    return (

        <Container>
            <Row>
                <Col lg='4' md='12'><LeftSideNav></LeftSideNav></Col>
                <Col lg='8' md='12'><Outlet></Outlet></Col>
            </Row>
        </Container>

    );
};

export default CourseMain;