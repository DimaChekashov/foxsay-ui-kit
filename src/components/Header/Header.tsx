import React from "react";

import {Link, NavLink} from "react-router-dom";

import logo from "../../logo.svg";

import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.headerLogo} />
        </Link>
        <ul className={styles.headerNav}>
          <li>
            <NavLink to="/components" className={styles.headerNavLink}>
              Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/templates" className={styles.headerNavLink}>
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs" className={styles.headerNavLink}>
              Documentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.headerNavLink}>
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
