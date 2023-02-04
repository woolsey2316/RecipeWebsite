import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/sass/TeamCard.module.scss';

function TeamCard({name, occupation, img}) {
  return ( 
    <div className={styles.outer}>
      <div className={styles.teamImg}>
        <a className={styles.imgLink} href='/team'>
          <img className={styles.img} src={img}></img>
        </a>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.occupation}>{occupation}</span>
        <ul className={styles.socialMedia}>
          <li className={styles.li}>
            <a className={styles.link} href="https://www.facebook.com/">
              <div className={styles.iconWrap}>
                <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
              </div>
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="https://www.instagram.com/">
              <div className={styles.iconWrap}>
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
              </div>
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="https://www.twitter.com/">
              <div className={styles.iconWrap}>
                <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
              </div>
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="https://www.youtube.com/">
              <div className={styles.iconWrap}>
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
   );
}

export default TeamCard;