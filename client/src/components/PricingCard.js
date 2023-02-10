import React from 'react'
import styles from '../styles/sass/PricingCard.module.scss'
import AnimatedButton2 from '../components/button/AnimatedButton2'

function PricingCard({price, title, workouts}) {
  return ( 
    <div className={styles.outer}>
      <div className={styles.pricingTitle}>
        <h3 className={styles.heading}>${price}</h3>
        <span className={styles.title}>{title}</span>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>{workouts} Workouts</li>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>Meal Plans & Analysis</li>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>Weight Assesment</li>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>Physical Activities</li>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>Client Monitoring</li>
        <li className={styles.li}>
          <svg className={styles.icon} fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z" clip-rule="evenodd"/></svg>24/7 Support</li>
      </ul>
      <AnimatedButton2 text="Book Now" />
    </div>
   );
}

export default PricingCard;