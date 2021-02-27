import React from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="i-navbar navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">DBMS Monitor</span>
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-top" />
            </div>
        </nav>
    );
}

export default Navbar;