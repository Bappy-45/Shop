import React from 'react'

import style from './lavel.module.css'
function Lavel({img}) {
  return (
    
      <div className={style.container}>
      <div className={style.lavel}>
          <img src={img} alt=""  />
    </div>
    </div>
  )
}

export default Lavel
