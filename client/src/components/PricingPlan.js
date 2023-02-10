import React from 'react'
import styles from '../styles/sass/PricingPlan.module.scss'
import Container from '../container/Container'
import PricingCard from '../components/PricingCard'

function PricingPlan() {
  return ( 
    <div className={styles.container}>
      <Container>
        <div className={styles.sectionTitle}>
          <span className={styles.title}>Pricing Plan</span>
          <h3 className={styles.heading}>Choose Your Best Plan</h3>
        </div>
        <div className={styles.inner}>
          <div className={styles.col}>
            <PricingCard workouts={20} title="Starter" price="25" />
          </div>
          <div className={styles.col}>
            <PricingCard workouts={24} title="Advanced" price="45" />
          </div>
          <div className={styles.col}>
            <PricingCard workouts={30} title="Premium" price="65" />
          </div>
        </div>
      </Container>
      <div className={styles.pricingShape}>
        <img src="/images/shape4.png"></img>
      </div>
    </div>
   );
}

export default PricingPlan;