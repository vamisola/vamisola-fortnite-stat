import React from 'react';
import './Header.css';
import logo from './logo.png';
// import Search from './Search';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="logo" className="Header-logo" />
            <h1 className="fs"> Fortnite Stats </h1>
            {/* <Search /> */}
        </div>
    )
}

export default Header;
