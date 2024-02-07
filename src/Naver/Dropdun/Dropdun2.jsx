import React from 'react'

import { Link } from 'react-router-dom'
import Dropdun from './Dropdun'
import style from './dropdun2.module.css'
function Dropdun2() {
  return (
    <div>
       <nav className={style.navsection}>
     
     <ul >
         <div className={style.list} >
           
           <div className={style.listitems}> 
            <Link to="/"> Home</Link>
           </div>
           <div className={style.listitems}> 
            <Link to="All Product"> All Product</Link>
           </div>
           <div className={style.listitems}> 
            <Link to="Groceries"> Groceris</Link>
           </div>
           <div className={style.listitems}> 
            <Link to="Meat"> Met&Fish</Link>
           </div>
           <div className={style.listitems}> 
            <Link to="Faq"> Faq</Link>
           </div>
          

         </div>
      
       
       

     </ul>
  </nav>
    </div>
  )
}

export default Dropdun2
