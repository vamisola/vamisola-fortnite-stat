import React from 'react';
import './Header.css';
import logo from './logo.png';
// import Search from './Search';

const Header = ({player}) => {
    const style = {
      color: '#0ccac4'
    }
    return (
        <div className="Header">
            <img src={logo} alt="logo" className="Header-logo" />
            <h1 className="fs"> Fortnite Stats: <span style={style}>{player} </span></h1>
            {/* <Search /> */}
        </div>
    )
}

export default Header;
