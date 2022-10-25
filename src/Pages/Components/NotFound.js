import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad } from "react-icons/hi";

const NotFound = () => {
    return (
        <div
            style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center w-100"
        >
            <div className="text-center">
                <h1><HiOutlineEmojiSad /></h1>
                <h1>404</h1>
                <h5>Page Not Found </h5>
                <p className='text-muted'>The page you are looking for doesn't exist or an other error occurred.<br />
                    Go back to home page tp choose new direction.
                </p>
                <Link to='/'><button className="btn btn-warning">Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;