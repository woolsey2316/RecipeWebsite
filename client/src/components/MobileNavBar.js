import React from 'react'
import Container from '../container/Container'
import styles from '../styles/sass/MobileNavBar.module.scss'
import AnimatedButton1 from './button/AnimatedButton1';

function MobileNavBar() {
  return ( 
    <div className={styles.outer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.meanBar}>
            <button className={styles.navButton}>
              <span className={styles.menuIcon}>
                <span className={styles.menuIcon}>
                  <span className={styles.menuIcon}></span>
                </span>
              </span>
            </button>
            <nav className={styles.meanNav}>
              <ul className={styles.navBar}>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}>Home</a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
                <li className={styles.navItem}>
                  <a href="/index" className={styles.navLink}></a>
                </li>
              </ul>
              <div className={styles.mobileNav}>
                <div className={styles.mobileNavInner}>
                  <div className={styles.searchWrap}>
                    <button className={styles.searchButton}>
                      <img className={styles.searchIcon} src="/images/search.svg"></img>
                    </button>
                  </div>
                  <div className={styles.buttonWrap}>
                    <AnimatedButton1 text="Appointment"></AnimatedButton1>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className={styles.logo}>
            <img src="/images/logo.png" className={styles.logo} alt="Logo" />
          </div>
        </div>
      </Container>
    </div>
   );
}

export default MobileNavBar;