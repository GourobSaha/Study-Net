import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='text-center mb-5'>
            <h2>Our Courses</h2>
            <div className='row row-cols-md-2 g-4 mt-2'>
                {
                    courses.map(course => <AllCourses
                        key={course.id}
                        course={course}
                    ></AllCourses>)
                }
            </div>
        </div>
    );
};

export default Courses;