import React from 'react';
import styles from '../styles/sass/ServicesCard.module.scss';

function ServicesCard({title, img}) {
  return ( 
    <div className={styles.outer}>
      <a href="/service-details" className={styles.link}>
        <img src={img} className={styles.img}></img>
      </a>
      <div className={styles.content}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        dolore magna aliqua quis ipsum.</p>
        <a href="/service-details" className={styles.learnBtn}>Learn More</a>
      </div>
    </div>
   );
}

export default ServicesCard;