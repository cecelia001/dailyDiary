import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    return (
        <nav className="NavBar">
            <ul>
                <li><NavLink to="" end>Home</NavLink></li>
                <li><NavLink to="/entry">New Entry</NavLink></li>
                <li><NavLink to="/diary">Read Diary</NavLink></li>
            </ul>
        </nav>
    );
}



export default NavBar;