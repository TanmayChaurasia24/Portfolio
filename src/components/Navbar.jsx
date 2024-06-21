import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const logoutbutton= ()=> {
        localStorage.removeItem("token");
        navigate('/')
    }

    const isadmin = () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Debugging2026tanmay2026kumar2026chaurasia2026
        if(token) {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            console.log('Email:', email); // Debugging
            console.log('Password:', password); // Debugging
            if(email === 'tanmaykumar.kanpur@gmail.com' && password === '2026tanmay2026kumar2026chaurasia2026') {
                return true;
            }
        }
        return false;
    };
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{
                        color:"#E36414",
                        fontWeight:"bold"
                    }}>Tanmay Kumar Chaurasia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            {isadmin() && (<li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
                                    aria-current="page" href="/admin">Admin</a>
                            </li>)}
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</a>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<div className="buttons mx-5">
                        <a href='/signup' class="btn  mx-2" style={{backgroundColor:"#E36414",color:"white"}}>signup</a>
                        <a href="/login" class="btn  mx-1" style={{backgroundColor:"#E36414",color:"white"}}>login</a>
                        </div>: <button className="btn btn-sm  mx-3" style={{backgroundColor:"#E36414",color:"white"}} onClick={logoutbutton}>logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
