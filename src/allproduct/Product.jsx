import React, { useState } from 'react'

import { useNavigate } from 'react-router'

import style from './product.module.css'
import bd from './db.json'
import Card from './Card'


function Peoduct({onChange}) {

  const navigate =useNavigate() ;
  

  return (
    
    <div className='container'>  
        <div>
          <h1 className={style.header}>All Products</h1>
          </div>
        <div className={style.btn}>
          <button onClick={()=>{navigate("/")}}> Go to home</button>
        </div>
     
      {bd.map((x)=>{ 
        return(
            
            <Card img={x.img} code={x.code} description={x.productditails} price={x.price} />
          
        )
      })}
      <hr />
      
    </div>
  )
}

export default Peoduct
