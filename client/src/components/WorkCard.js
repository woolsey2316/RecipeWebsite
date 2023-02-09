import React from 'react'
import styles from '../styles/sass/WorkCard.module.scss';

function WorkCard({title, img, icon}) {
  return ( 
    <div className={styles.outer}>
      <div className={styles.inner}>
        <img className={styles.img} src={icon}></img>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
      </div>
    </div>
   );
}

export default WorkCard;