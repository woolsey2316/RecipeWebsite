import React from 'react';
import {NavLink } from 'react-router-dom';
import NavStyle from './assets/css/navbar.module.css';

const iconPath = process.env.PUBLIC_URL + '/images/logo.png';


function Navigation() {
    
    return (
        <div style={NavStyle} className="navigationContainer">
            <nav>
                <div className="container">
                    <img src={iconPath} alt="logo"></img>
                </div>
                <ul style={NavStyle}>
                    <NavLink  exact activeStyle={{ color: '#b6956a' }} to='/'>
                        <li style={NavStyle}>HOME</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/vegan'>
                        <li style={NavStyle}>VEGAN</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/keto'>
                        <li style={NavStyle}>KETO</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/glutenFree'>
                        <li style={NavStyle}>GLUTEN FREE</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/paleo'>
                        <li style={NavStyle}>PALEO</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/lowCarb'>
                        <li style={NavStyle}>LOW CARB</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to="/recipe-search">
                        <li style={NavStyle}>SEARCH</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/about'>
                        <li style={NavStyle}>ABOUT</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;