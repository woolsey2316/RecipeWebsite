import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import AnimatedButton1 from '../components/button/AnimatedButton1';
import AnimatedButton2 from '../components/button/AnimatedButton2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from '../container/Container';
import styles from '../styles/sass/Carousel.module.scss';

const customIndicator = (
  clickHandler,
  isSelected,
  index,
  label
) => 
  <button className={styles.dotWrap} onClick={clickHandler}>
    <span className={`${styles.dot} ${isSelected ? styles.activeDot : ""}`}></span>
  </button>
function MainCarousel() {
  return ( 
    <div className={styles.carouselWrap}>
      <Carousel infiniteLoop={true} interval={3000} autoPlay={true} showStatus={false} showArrows={false} showThumbs={false} renderIndicator={customIndicator}>
        <div>
          <Container>
            <div className={styles.grid}>
              <div className={styles.gridLeft}>
                <div>
                  <h2 className={styles.heading}>Good Nutrition Prevent Your Disease</h2>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Quis ipsum 
                  </p>
                  <div className={styles.buttonBanner}>
                    <AnimatedButton1 href={"/about"} text="Learn More"></AnimatedButton1>
                    <AnimatedButton2 href={"/contact"} text="Contact Us"></AnimatedButton2>
                  </div>
                </div>
              </div>
              <div className={styles.gridRight}>
                <img className={styles.img} src="/images/home-two-img1.jpg" />
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className={styles.grid}>
              <div className={styles.gridLeft}>
                <div>
                  <h2 className={styles.heading}>Healthy and Delicious Baked Pasta</h2>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Quis ipsum 
                  </p>
                  <div className={styles.buttonBanner}>
                    <AnimatedButton1 href={"/about"} text="Learn More"></AnimatedButton1>
                    <AnimatedButton2 href={"/contact"} text="Contact Us"></AnimatedButton2>
                  </div>
                </div>
              </div>
              <div className={styles.gridRight}>
                <img className={styles.img} src="/images/home-two-img2.jpg" />
              </div>
            </div>
          </Container>    
        </div>
        <div>
          <Container>
            <div className={styles.grid}>
              <div className={styles.gridLeft}>
                <div>
                  <h2 className={styles.heading}>Nourishing with Healthy Food Choices</h2>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Quis ipsum 
                  </p>
                  <div className={styles.buttonBanner}>
                    <AnimatedButton1 href={"/about"} text="Learn More"></AnimatedButton1>
                    <AnimatedButton2 href={"/contact"} text="Contact Us"></AnimatedButton2>
                  </div>
                </div>
              </div>
              <div className={styles.gridRight}>
                <img className={styles.img} src="/images/home-two-img3.jpg" />
              </div>
            </div>
          </Container>
        </div>
      </Carousel>
      <div>
        <img className={styles.leaf1} src="/images/shape1.png"></img>
        <img className={styles.leaf2} src="/images/shape2.png"></img>
        <img className={styles.leaf3} src="/images/shape3.png"></img>
      </div>
    </div>
   );
}

export default MainCarousel;