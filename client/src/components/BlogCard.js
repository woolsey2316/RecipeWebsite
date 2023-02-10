import React from 'react'
import styles from '../styles/sass/BlogCard.module.scss'

function BlogCard({date, title, img}) {
  return ( 
    <div className={styles.outer}>
      <a className={styles.link} href="/blog-details">
        <img className={styles.img} src={img}></img>
      </a>
      <div className={styles.content}>
        <span className={styles.date}><img className={styles.calendar} src="/images/small-calendar.png"></img>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <a className={styles.readMore} href="/blog-details">Read More</a>
      </div>
    </div>
   );
}

export default BlogCard;