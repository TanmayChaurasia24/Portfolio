import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
                <li className="nav-item"><a href="/services" className="nav-link px-2 text-body-secondary">Services</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
                <li className="nav-item"><a href="/blogs" className="nav-link px-2 text-body-secondary">Blogs</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Tanmay Kumar Chaurasia</p>
        </footer>
    );
};

export default Footer;
