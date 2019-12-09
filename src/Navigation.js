import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavStyle from './navbar.module.css';

function Navigation() {
    
    return (
        <nav style={NavStyle}>
            <h3>Logo</h3>
            <ul style={NavStyle}>
                <Link to='/keto'>
                    <li>Keto</li>
                </Link>
                <Link to='/glutenFree'>
                    <li>GlutenFree</li>
                </Link>
                <Link to='/paleo'>
                    <li>Paleo</li>
                </Link>
                <Link to='/lowCarb'>
                    <li>LowCarb</li>
                </Link>
                <Link to="/recipe-search">
                    <li> Search</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>

        </nav>
    );
}

export default Navigation;