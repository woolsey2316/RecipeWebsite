import React from 'react'
import buttonStyles from '../../styles/sass/Button.module.scss'

function AnimatedButton2({href, text}) {
  return ( 
    <a className={buttonStyles.animatedButton2} href={href}>{text}</a>
   );
}

export default AnimatedButton2;