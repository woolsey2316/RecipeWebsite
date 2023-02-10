import React from 'react'
import styles from '../styles/sass/HealthGuideCard.module.scss'

function HealthGuideCard({title, number}) {
  return ( 
    <div className={styles.outer}>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum</p>
      <div className={styles.number}>{number}</div>
    </div>
   );
}

export default HealthGuideCard;