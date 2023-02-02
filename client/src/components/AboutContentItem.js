import React from 'react'
import styles from '../styles/sass/AboutContentItem.module.scss'

function AboutContentItem({icon, title}) {
  return ( 
    <div className={styles.outer}>
      {icon}
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
   );
}

export default AboutContentItem;