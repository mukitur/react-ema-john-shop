import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="\Shop" >Home</a>
                <a href="\shop" >Shop</a>
                <a href="\home" >About</a>
                <a href="\home" >Inventory Management</a>

            </nav>
        </div>
    );
};

export default Header;