import React from 'react'

import style from './product.module.css'
import bd from './db.json'
 import Card from './Card'

function Peoduct() {

  return (
    
    <div className='container'>  
        <h1 className={style.header}>Now in demand</h1>
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
