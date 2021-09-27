import React from 'react';
import SearchBar from './SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import styles from './modules/Nav.module.css';


function Nav({onSearch}) {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.list}>
    <li className={styles.listItem}>
    <NavLink to ='/'>Home </NavLink>
    <NavLink to='/about'>About</NavLink>
    <SearchBar onSearch={onSearch}/>
    </li>
    </ul>
    </nav>
  );
};

export default Nav;
