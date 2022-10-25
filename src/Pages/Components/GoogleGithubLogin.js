import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const GoogleGithubLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="primary w-100" type="submit">
                <FaGoogle /> Login with Google
            </Button>
            <Button onClick={handleGitHubSignIn} variant="dark w-100 mt-2" type="submit">
                <FaGithub /> Login with GitHub
            </Button>
        </div>
    );
};

export default GoogleGithubLogin;