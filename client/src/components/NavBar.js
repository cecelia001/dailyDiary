import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    return (
        <nav className="NavBar">
            <ul>
                <li><NavLink to="" end>home</NavLink></li>
                <li><NavLink to="/diary">diary</NavLink></li>
                <li><NavLink to="/entry">new entry</NavLink></li>
            </ul>
        </nav>
    );
}



export default NavBar;