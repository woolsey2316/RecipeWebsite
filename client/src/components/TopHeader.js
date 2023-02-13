import React, { useState } from 'react'
import styles from '../styles/sass/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
 } from "@fortawesome/free-brands-svg-icons";
 import {
  faGlobeAsia
 } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames';

import Container from '../container/Container'

function TopHeader() {
  const [show, setShow] = useState(false)
  const [language, setLanguage] = useState("English")
  return ( 
    <header className={styles.header}>
      <Container>
        <div className={styles.topInnerBg}>
          <div className={styles.row}>
            <div className={styles.welcome}>
              <div className={styles.headerLeft}>
                <p className={styles.welcomeText}>Welcome To Arrola Health!</p>
              </div>
            </div>
            <div className={styles.innerRight}>
              <div className={styles.rightHeader}>
                <div className={styles.headerItem}>
                  <ul className={styles.uList}>
                    <li className={styles.title}>Follow us :</li>
                    <li className={styles.listItem}>
                      <div className={styles.iconWrap}>
                        <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
                      </div>
                    </li>
                    <li className={styles.listItem}>
                      <div className={styles.iconWrap}>
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                      </div>
                    </li>
                    <li className={styles.listItem}>
                      <div className={styles.iconWrap}>
                        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                      </div>
                    </li>
                    <li className={styles.listItem}>
                      <div className={styles.iconWrap}>
                        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.headerItem}>
                  <div className={styles.shoppingBagWrap}>
                    <svg className={styles.shoppingBagIcon} viewBox="0 0 483.1 483.1"><path d="m434.55 418.7-27.8-313.3c-.5-6.2-5.7-10.9-12-10.9h-58.6c-.1-52.1-42.5-94.5-94.6-94.5s-94.5 42.4-94.6 94.5h-58.6c-6.2 0-11.4 4.7-12 10.9l-27.8 313.3v1.1c0 34.9 32.1 63.3 71.5 63.3h243c39.4 0 71.5-28.4 71.5-63.3v-1.1zM241.55 24c38.9 0 70.5 31.6 70.6 70.5h-141.2c.1-38.9 31.7-70.5 70.6-70.5zm121.5 435h-243c-26 0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-42.1h141.2v42.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-42.1h47.6l26.8 301.8c-.3 21.4-21.5 38.7-47.5 38.7z"/></svg>
                  </div>
                </div>
                <div className={styles.headerItem}>
                  <div className={styles.languageDropdown}>
                    <button onClick={() => setShow(show => !show)} className={styles.dropdownToggle}>
                      <FontAwesomeIcon icon={faGlobeAsia} />
                      <span className={styles.language}>{language}</span>
                      <svg className={styles.chevronDown} viewBox="0 0 20 20"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
                    </button>
                    <div className={classNames(styles.dropdownMenu, {[styles.show]: show})}>
                      <div onClick={() => {setShow(show => !show);setLanguage("English")}} className={styles.dropdownOption}>
                        <img className={styles.nationalityIcon} src="/images/uk.png"></img>
                        <span className={styles.languageOption}> English</span>
                      </div>
                      <div onClick={() => {setShow(show => !show);setLanguage("简体中文")}} className={styles.dropdownOption}>
                        <img className={styles.nationalityIcon} src="/images/china.png"></img>
                        <span className={styles.languageOption}>简体中文</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
   );
}

export default TopHeader;