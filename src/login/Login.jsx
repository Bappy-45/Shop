import React from 'react'
import Naver from '../Naver/Naver'


import { VscAccount } from "react-icons/vsc";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import style from './loging.module.css'
import { useNavigate } from 'react-router';
function Login() {
  const navigate=useNavigate()
  return (
    <div>
      <Naver/>
      <div className={style.btn}>
          <button onClick={()=>{navigate("/")}}> Go To Home </button> 
        </div>
      <div className='container'>
        
        <div className={style.main}>
          <div className={style.imgdiv}>
            
            <div style={{textAlign:"center"}}>
            <img src="https://img.freepik.com/premium-vector/login-concept-illustration_65141-421.jpg" alt=""  className='img-fluid'/>
          </div>
        </div>

        <div className={style.input}>
            <VscAccount className={style.icon}/>
        <div style={{marginLeft:"40px", marginTop:"10px"}}>
            <form>
              <div className={style.inputfild}><input type="text" placeholder='Email Address' /></div> 
              <div className={style.inputfild}><input type="password" placeholder='Password'/></div>
              <button type="submit" className={style.btn}>LOGIN </button>
            </form>
        </div>

        <div className={style.signin}>
           <div className={style.border}></div>
           <div className={style.WITH}>SIGN IN WITH</div>
           <div className={style.border}></div>
        </div>
        <div className={style.loginIcons}>
            <div className={style.logins} ><FaGoogle /></div>
            <div  className={style.logins} ><FaGithub  /></div>
        </div>
            <p style={{textAlign:"center"}}>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default Login
