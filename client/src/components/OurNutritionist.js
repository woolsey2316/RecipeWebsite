import React from 'react';
import styles from '../styles/sass/OurNutritionist.module.scss';
import Container from '../container/Container';
import TeamCard from '../components/TeamCard';

function OurNutritionist() {
  return ( 
    <div className={styles.outer}>
      <Container>
        <div className={styles.sectionTitle}>
          <span className={styles.title}>Our Popular Nutritionist</span>
          <h2 className={styles.largeTitle}>Our Specialist Nutritionist</h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrap}>
            <TeamCard 
              name="Dr. Aruna Malis"
              occupation="Nutritionist" 
              img="/images/team-img1.jpg"/>
          </div>
          <div className={styles.cardWrap}>
            <TeamCard 
              name="Dr. Pritula Juli"
              occupation="Head Of Department" 
              img="/images/team-img2.jpg"/>
          </div>
          <div className={styles.cardWrap}>
            <TeamCard 
              name="Dr. Melona Jack"
              occupation="Senior Nutritionist" 
              img="/images/team-img3.jpg"/>
          </div>
          <div className={styles.cardWrap}>
            <TeamCard 
              name="Dr. Aila Faris"
              occupation="Assistnat Of Department" 
              img="/images/team-img4.jpg"/>
          </div>
        </div>
      </Container>
    </div>
   );
}

export default OurNutritionist;