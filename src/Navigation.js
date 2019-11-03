import React from 'react';
import { link } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import styles from './App.css'

function Navigation() {
    const NavStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <link style={NavStyle} to='/about'>
                    <li>About</li>
                </link>
                <link to="/recipe-search" style={NavStyle}>
                    <li> Recipe Search</li>
                </link>
            </ul>

        </nav>
    );
}

export default Navigation;