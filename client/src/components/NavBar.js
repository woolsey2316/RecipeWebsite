import React from 'react'
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import styles from '../styles/sass/NavBar.module.scss';

function NavBar() {
  return ( 
    <div className={styles.outer}>
      <DesktopNavBar />
      <MobileNavBar />
    </div> 
  );
}

export default NavBar;