import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../logo.svg";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="header-logo"/>
        </Link>
        <ul className="header-nav">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/docs" className="nav-link">Docs</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About us</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;