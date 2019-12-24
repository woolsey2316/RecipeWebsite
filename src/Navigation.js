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
                <ul style={NavStyle.ul}>
                    <NavLink  exact activeStyle={{ color: '#b6956a' }} to='/'>
                        <li style={NavStyle.li}>HOME</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/vegan'>
                        <li style={NavStyle.li}>VEGAN</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/keto'>
                        <li style={NavStyle.li}>KETO</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/glutenFree'>
                        <li style={NavStyle.li}>GLUTEN FREE</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/paleo'>
                        <li style={NavStyle.li}>PALEO</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/lowCarb'>
                        <li style={NavStyle.li}>LOW CARB</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to="/recipe-search">
                        <li style={NavStyle.li}>SEARCH</li>
                    </NavLink>
                    <NavLink  activeStyle={{ color: '#b6956a' }} to='/about'>
                        <li style={NavStyle.li}>ABOUT</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;