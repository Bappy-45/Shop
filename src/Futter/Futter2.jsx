import React from 'react'
import Style from './futter2.module.css'

import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Futter2() {
  return (
    <div className='container'>
      <div className="row">
            <div className="col-md-6 p-3  colom-gap-2">
                <div className='bg-secondary p-3'>
                    <h1 className={Style.h1}>Stay Connected</h1>
                    <p className={Style.h1}>Exclusive offers</p>
                    <p className={Style.p}>Subscribe to our news and get updated about exclusive offers!</p>
 
                    <div className='row'>
                        <div className="col-md-8">
                            <input type="text" className={Style.setchinput} />
                        </div>
                        <div className="col-md-4">
                            
                            <button className={Style.btn}>cleek Me</button>
                            
                        </div>

                    </div>
                </div>
                
            </div>
            <div className="col-md-6  p-3  colom-gap-2 ">
                <div className='bg-secondary p-3'>
                  <h1 className={Style.h1}>Get social</h1>
                  <p className={Style.h1}>Join us in the group</p>
                  <p className={Style.p1}>and be the first to know all promotions and offers!</p>
                  <ul className={Style.ul}>
                    <li><a href="#"> <FaFacebook className={Style.icon} /></a></li>
                    <li ><a href="#"><IoLogoYoutube className={Style.icon} /> </a></li>
                  </ul>

                </div>
            </div>
      </div>
        
    </div>
  )
}

export default Futter2
