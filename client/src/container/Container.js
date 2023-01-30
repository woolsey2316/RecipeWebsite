import React from 'react'
import style from '../styles/sass/Container.module.scss'

function Container({children}) {
  return ( 
    <div className={style.container}>
      {children}
    </div>
   );
}

export default Container;