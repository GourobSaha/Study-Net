import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>Courses</h2>
        </div>
    );
};

export default Courses;