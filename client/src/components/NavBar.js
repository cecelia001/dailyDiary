import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    return (
        <nav className="NavBar">
            <ul>
                <li><NavLink to="" end>Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li> <a href="tel:+1234567890+">123-456-7890</a></li>
            </ul>
        </nav>
    );
}



export default NavBar;