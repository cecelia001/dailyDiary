import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/entry">New Entry</NavLink></li>
            </ul>
        </nav>
    );
}



export default NavBar;