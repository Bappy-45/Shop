import React from 'react'

import style from './product.module.css'
import bd from './db.json'
 import Card from './Card'
import { useNavigate } from 'react-router'

function Peoduct() {
      const navigate= useNavigate()
  return (
    
    <div className='container'>  
        <div>
        <h1 className={style.header}>Meat & Fish</h1>
        </div>
        <div className={style.btn}>
          <button onClick={()=>{navigate("/")}}> Go to home</button>
        </div>
          {bd.map((x)=>{ 
           return(

            <Card img={x.img} code={x.code} description={x.productditails} price={x.price}  />
          
                )
           })}
      <hr />
      
    </div>
  )
}

export default Peoduct
