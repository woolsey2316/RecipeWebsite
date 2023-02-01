import React from 'react'
import styles from '../styles/sass/BannerCard.module.scss'

function BannerCard({icon, title}) {
  return ( 
    <div className={styles.outer}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
      </p>
      <a href="/about" className={styles.learnMore}>Learn More</a>
      <div className={styles.topShapeContainer}>
        <img className={styles.motionlessImage} src="/images/shape5.png"></img>
        <img className={styles.animatedImage} src="/images/shape6.png"></img>
      </div>
    </div>
   );
}

export default BannerCard;