import React, { useState } from 'react'

import style from './count.module.css'
function Count() {
    const[count,setCount]=useState(0)
    const hendelincreament=()=>{
        setCount (count=> count+1)
    }
    const hendeldrecment=()=>{
        setCount(count=> count-1)
    }
  return (
   <div className={style.main}>
       <div><button onClick={hendelincreament} style={{backgroundColor:"green"}} >+</button></div>
       <div>{count}</div>
       <div>
       <button onClick={hendeldrecment} disabled={count==0}
       style={{backgroundColor:"green"}}>-</button> 
       </div>
       </div>
  )
}

export default Count
