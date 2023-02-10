import React from 'react'
import styles from '../styles/sass/LatestFromBlog.module.scss'
import Container from '../container/Container'
import BlogCard from '../components/BlogCard'

function LatestFromBlog() {
  return ( 
    <div className={styles.container}>
      <Container>
        <div className={styles.sectionTitle}>
          <span className={styles.title}>Latest News</span>
          <h3 className={styles.heading}>Latest Recipe from Blog</h3>
        </div>
        <div className={styles.inner}>
          <div className={styles.col}>
            <BlogCard date="22 April, 2021" title="7 Healthy & Simp,gluten free Cookie, Cake Recipes" img="/images/blog-img2.jpg"/>
          </div>
          <div className={styles.col}>
            <BlogCard date="23 April, 2021" title="Top 5 Tips Why Self Care Is More Important" img="/images/blog-img3.jpg"/>
          </div>
          <div className={styles.col}>
            <BlogCard date="24 April, 2021" title="Top 8 Ways for Living Healthy Life" img="/images/blog-img4.jpg"/>
          </div>
        </div>
      </Container>
    </div>
   );
}

export default LatestFromBlog;