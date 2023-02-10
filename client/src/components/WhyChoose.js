import React from 'react'
import styles from '../styles/sass/WhyChoose.module.scss'
import Container from '../container/Container'
import HealthGuideCard from './HealthGuideCard';

function WhyChoose() {
  return ( 
    <div className={styles.container}>
      <Container>
        <div className={styles.outer}>
          <div className={styles.sectionTitle}>
            <span className={styles.title}>Reason Of Choice</span>
            <h3 className={styles.heading}>Why Choose Health Guide?</h3>
          </div>
          <HealthGuideCard number={1} title="Healthy Diets" />
          <HealthGuideCard number={2} title="Nutrition Strategies" />
          <HealthGuideCard number={3} title="Individual Support" />
          <HealthGuideCard number={4} title="Exercise Daily" />
        </div>
      </Container>
    </div>
   );
}

export default WhyChoose;