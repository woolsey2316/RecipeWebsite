import { faInstagram, faLinkedin, faPinterest, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from '../container/Container'
import styles from '../styles/sass/FooterArea.module.scss'

function FooterArea() {
  return ( 
    <footer className={styles.container}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <div className={styles.footerWidget}>
                <div className={styles.footerLogo}>
                  <a className={styles.footerLogoLink} href="/index">
                    <img className={styles.footerLogoImg} src="/images/footer-logo.png"></img>
                  </a>
                </div>
                <p className={styles.footerText}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua quis ipsum suspendisse.</p>
                <ul className={styles.socialLinks}>
                  <li className={styles.li}>
                    <FontAwesomeIcon className={styles.icon} icon={faFacebookF}></FontAwesomeIcon>
                  </li>
                  <li className={styles.li}>
                    <FontAwesomeIcon className={styles.icon} icon={faLinkedin}></FontAwesomeIcon>
                  </li>
                  <li className={styles.li}>
                    <FontAwesomeIcon className={styles.icon} icon={faPinterest}></FontAwesomeIcon>
                  </li>
                  <li className={styles.li}>
                    <FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.usefulLinks}>
                <h3 className={styles.linksHeading}>Useful Links</h3>
                <ul className={styles.linksList}>
                  <li className={styles.links}><a className={styles.usefulLink}>Home</a></li>
                  <li className={styles.links}><a className={styles.usefulLink}>About</a></li>
                  <li className={styles.links}><a className={styles.usefulLink}>Portfolio</a></li>
                  <li className={styles.links}><a className={styles.usefulLink}>Privacy Policy</a></li>
                  <li className={styles.links}><a className={styles.usefulLink}>Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.col1}>
              <div className={styles.information}>
                <h3 className={styles.informationHeading}>Information</h3>
                <ul className={styles.informationLinks}>
                  <li className={styles.infoLi}>Phone
                    <span className={styles.infoText}>
                      <a className={styles.infoLink} href="+8245678924">+8245678924</a>
                      <br/>
                      <a className={styles.infoLink} href="+8245678924">+8245678924</a>
                    </span>
                  </li>
                  <li className={styles.infoLi}>Email
                    <span className={styles.infoText}>
                      <a className={styles.infoLink} href="+8245678924">hello@arrola.com</a>
                      <br/>
                      <a className={styles.infoLink} href="+8245678924">info@arrola.com</a>
                    </span>
                  </li>
                  <li className={styles.infoLi}>Address
                    <span className={styles.infoText}>
                      5ut, Stamford South,
                      <br/>
                      New Zeland
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col3}>
              <div className={styles.newsletterWidget}>
                <h3 className={styles.newsletterHeading}>Newsletter</h3>
                <p className={styles.newsletterText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor.</p>
                <div className={styles.newsletterArea}>
                  <form className={styles.newsletterForm}>
                    <input className={styles.emailInput} type="email" placeHolder="Enter Your Email" name="EMAIL"></input>
                    <button className={styles.subscribeButton}>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.copyright}>
        <Container>
          <div className={styles.inner}>
            <p className={styles.copyrightText}>
            Copyright 2023 Arrola. All Rights Reserved by
            <a className={styles.copyrightLink}> HiBootstrap</a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
   );
}

export default FooterArea;