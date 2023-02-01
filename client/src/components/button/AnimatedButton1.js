import React from 'react'
import buttonStyles from '../../styles/sass/Button.module.scss'

function AnimatedButton1({href, text}) {
  return ( 
    <a className={buttonStyles.animatedButton1} href={href}>{text}</a>
   );
}

export default AnimatedButton1;