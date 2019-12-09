import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import About from './About';
import styles from './App.css'

function Navigation() {
    const NavStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={NavStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={NavStyle} to='/keto'>
                    <li>Keto</li>
                </Link>
                <Link style={NavStyle} to='/glutenFree'>
                    <li>GlutenFree</li>
                </Link>
                <Link style={NavStyle} to='/paleo'>
                    <li>Paleo</li>
                </Link>
                <Link style={NavStyle} to='/lowCarb'>
                    <li>LowCarb</li>
                </Link>
                <Link to="/recipe-search" style={NavStyle}>
                    <li> Recipe Search</li>
                </Link>
            </ul>

        </nav>
    );
}

export default Navigation;