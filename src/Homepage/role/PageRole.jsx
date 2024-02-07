import React from 'react'
import Roleer from './Roleer'
import style from './role.module.css'
function PageRole() {
  const img="https://dailyshoppingbd.com/images/promo/130/Free-Home-Delivery_2543X300_29-10-22.webp"
  return (
    <div>
      <div className={style.role}>
       <Roleer img={img}/>
      </div>
    </div>
  )
}

export default PageRole
