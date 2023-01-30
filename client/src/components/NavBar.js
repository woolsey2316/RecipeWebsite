import React from 'react'
import Container from '../container/Container'
import styles from '../styles/sass/Navbar.module.scss'
function NavBar() {
  return ( 
    <div className={styles.navbarOuter}>
      <Container>
        <nav className={styles.nav}>
          <a className={styles.navbarBrand}>
            <img src="/images/logo.png"></img>
          </a>
          <div className={styles.innerNavWrap}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href='/' className={styles.navLink}>
                  Home
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink}>
                  Pages
                  <svg className={styles.chevronDown} viewBox="0 0 20 20"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
                </a>
                <ul className={styles.dropDownMenu}>
                  <li className={styles.navListItem}><a className={styles.link} href="/about-us">About Us</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/team">Team</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/testimonials">Testimonials</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/nutritionist">Nutritionist</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/portfolio">Portfolio</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/appointment">Appointment</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/recipe">Recipe</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/pricing-plan">Pricing Plan</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/faq">FAQ</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/terms&conditions">Terms & Conditions</a></li>
                  <li className={styles.navListItem}><a className={styles.link} href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </li>
              <li className={styles.navItem}>
                <a href="/vegan" className={styles.navLink}>
                  Vegan
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/sugar-conscious" className={styles.navLink}>
                  Sugar Conscious
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/keto" className={styles.navLink}>
                  Keto
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/gluten-free" className={styles.navLink}>
                  Gluten Free
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/paleo" className={styles.navLink}>
                  Paleo
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/low-carb" className={styles.navLink}>
                  Low Carb
                </a>
              </li>
            </ul>
            <div className={styles.otherOptions}>
              <div className={styles.optionalItem}>
                <button className={styles.button}>
                  {/* search icon */}
                  <svg className={styles.searchIcon} viewbox="0 0 50 50"><path d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"/></svg>
                </button>
              </div>
              <div className={styles.optionalItem}>
                <a className={styles.appointmentButton} href="/appointment">Book an Apppointment</a>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
   );
}

export default NavBar;