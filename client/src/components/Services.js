import React from 'react';
import Container from '../container/Container';
import styles from '../styles/sass/Services.module.scss';
import ServicesCard from '../components/ServicesCard';

function Services() {
  return ( 
    <div className={styles.outer}>
      <Container>
        <div className={styles.sectionTitle}>
          <span className={styles.title}>What We Offer</span>
          <h3 className={styles.heading}>Diet & Nutritionist Services</h3>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.col}>
            <ServicesCard title="Weight Loss Program" img="/images/services-img1.jpg"/>
          </div>
          <div className={styles.col}>
            <ServicesCard title="Nutrition Response Testing" img="/images/services-img2.jpg"/>
          </div>
          <div className={styles.col}>
            <ServicesCard title="Clinical Nutrition" img="/images/services-img3.jpg"/>
          </div>
        </div>
      </Container>
    </div>
   );
}

export default Services;