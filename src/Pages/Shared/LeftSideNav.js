import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courseNames, setCourseNames] = useState(([]));

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourseNames(data))
    }, [])

    return (
        <Container>
            <div className='text-start'>
                <h3>Featured Courses</h3>
                <Link to={'/courses'}>All Courses</Link >
                <div className='mt-2'>
                    {
                        courseNames.map(courseName => <p key={courseName.id}>
                            <Link to={`/courses/${courseName.id}`}>{courseName.course_name}</Link>
                        </p>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default LeftSideNav;