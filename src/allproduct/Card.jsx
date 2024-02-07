import React, { useState } from 'react'

import { FaShoppingCart } from "react-icons/fa";


import style from "./card.module.css"
import Count from '../Homepage/increment/Count'

function Card( propds) {

    const {img,code,description,price}=propds ;
    
    const [count,setCount]=useState(false)
    
   
  return (
    <div className={style.container}>

      <div className={style.imgdiv}>
           <img src={img} alt="" className='imgfluid'/> 
      </div>

      <div className={style.title}>
        <p><span>{code}</span></p>
        <p>{description}</p>
      </div>

      <div className={style.carepricesection}>

        <p style={{fontSize:"25px",fontWeight:"bold"}}>
          {price}
        </p>

        <div className={style.icon} >
        <div>
          
        {
          count&& (<div className={style.count}><Count/></div>)
        }
        </div>

        <button onClick={()=>{setCount(!count)}}>
          
          {count ?<FaShoppingCart/> :<FaShoppingCart/>}
        
        </button>
        
        </div>
      </div>
      
    </div>
  )
}

export default Card
