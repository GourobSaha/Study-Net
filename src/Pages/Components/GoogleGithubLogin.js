import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";

const GoogleGithubLogin = () => {
    return (
        <div>
            <Button variant="primary w-100" type="submit">
                <FaGoogle /> Login with Google
            </Button>
            <Button variant="dark w-100 mt-2" type="submit">
                <FaGithub /> Login with GitHub
            </Button>
        </div>
    );
};

export default GoogleGithubLogin;