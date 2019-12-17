import React from 'react';
import {NavLink } from 'react-router-dom';
import NavStyle from './navbar.module.css';
import logo from './images/logo.png'

function Navigation() {
    
    return (
        <div style={NavStyle} className="navigationContainer">
            <nav>
                <div className="container">
                    <img src={logo} alt="logo"></img>
                </div>
                <ul>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/keto'>
                        <li>Keto</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/glutenFree'>
                        <li>Gluten Free</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/paleo'>
                        <li>Paleo</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/lowCarb'>
                        <li>Low Carb</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to="/recipe-search">
                        <li> Search</li>
                    </NavLink>
                    <NavLink activeStyle={{ color: '#b6956a' }} to='/about'>
                        <li>About</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;