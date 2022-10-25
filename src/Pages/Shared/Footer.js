import React from 'react';
import logoIcon from "../../Images/laptop_computer_books_study_pc_icon_209270.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-100 bg-dark text-white py-4 mt-auto text-center">
            <h4 className='text-warning'><img src={logoIcon} alt="logo" />STUDY NET</h4>
            <p>©Copyright 2023, All Rights Reserved to Study Net.</p>
            <div className="mx-1 fs-5">
                <Link className='text-warning'><FaFacebook /></Link>
                <Link className="mx-3 text-warning"><FaTwitter /></Link>
                <Link className='text-warning'><FaYoutube /></Link>
            </div>
        </div>
    );
};

export default Footer;