import React from 'react';
import logoIcon from "../../Images/laptop_computer_books_study_pc_icon_209270.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-100 bg-dark text-white py-4 mt-5 text-center">
            <h4><img src={logoIcon} alt="logo" />STUDY NET</h4>
            <p>©Copyright 2023, All Rights Reserved to Study Net.</p>
            <div className="mx-1 fs-5">
                <Link><FaFacebook /></Link>
                <Link className="mx-3"><FaTwitter /></Link>
                <Link><FaYoutube /></Link>
            </div>
        </div>
    );
};

export default Footer;