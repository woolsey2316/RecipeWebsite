import React from 'react'
import Container from '../container/Container'
import styles from '../styles/sass/HowItWorks.module.scss'
import WorkCard from '../components/WorkCard'

function HowItWorks() {
  return ( 
    <div className={styles.outer}>
      <Container>
        <div className={styles.sectionTitle}>
          <span className={styles.title}>How IT Works</span>
          <h3 className={styles.heading}>4 Easy Steps For Happy Life</h3>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.col}>
            <WorkCard title="Contact Us" icon="/images/contact.png" img="/images/work-img1.jpg"/>
          </div>
          <div className={styles.col}>
            <WorkCard title="Appointment" icon="/images/calendar.png" img="/images/work-img2.jpg"/>
          </div>
          <div className={styles.col}>
            <WorkCard title="Analysis" icon="/images/analysis.png" img="/images/work-img3.jpg"/>
          </div>
          <div className={styles.col}>
            <WorkCard title="Happy Life" icon="/images/happy.png" img="/images/work-img4.jpg"/>
          </div>
        </div>
      </Container>
    </div>
   );
}

export default HowItWorks;