import React, { useState } from 'react'

import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

import style from './naver.module.css'
import Dropdun from '../Naver/Dropdun/Dropdun2'
import { Link } from 'react-router-dom';
import data from './Dshop.json'

function Naver() {
  
  return (
    <div>
      <div className={style.maindiv}>
         <label >
           <img src={"https://dailyshoppingbd.com/images/logos/24/ds-logo.png"} className={style.label} alt="" />
           </label>
        <div className={style.container}>
         
                <input type="text" placeholder='Search your product' 
                className={style.setchinput} />
        </div>
        <div className={style.profilecomtainer}>
            <a href="" className={style.navicon}>
              <TiShoppingCart className={style.navicon} />
              </a>
            <Link to="/login" className={style.navicon} >
                 <VscAccount className={style.navicon} /> 
            </Link>
        </div>
      </div>
      <Dropdun/>
    </div>
    
  )
}

export default Naver
