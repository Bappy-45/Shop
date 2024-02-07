
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

import style from './futter.module.css'
import Futter2 from "./Futter2";
function Futter() {
    
  return (
    <div>
            <Futter2/>

<main className={style.main}>
        
        <div className='container'>
              <div className={style.futter}>
              <div className="row" >
                  {/* col */}
                  
                      <div className="col-md-4">
                          <ul>
                              <h3>ABOUT</h3>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam fuga eum vero nisi assumenda est, quo aspernatur ratione veniam officia.
                              </p>
                          </ul>
                      
                  </div>
                  {/* col */}
                  {/* col */}
                 
                      <div className="col-md-4">
                      <ul>
                              <h3>Contact Us</h3>
                              <li> House #8,Rood#14,Dhanmondi,
                                  Dhaka-1209 </li>
                              <li> Email: abcdef@email.com</li>
                              <h4>Follow Us  </h4>
                              <li><FaFacebook className={style.icon}/> 
                              <IoLogoYoutube className={style.icon}/> 
                              <FaInstagramSquare className={style.icon} />
                              </li>
                          </ul>
                      
                  </div>
                  {/* col */}
                  {/* col */}
                
                      <div className="col-md-4">
                      <ul>
                              <div className={style.list}>
                              <h3>Let Us Help You</h3>
                              <li> Your Account</li>
                              <li> Your Order</li>
                              <li>
                                  Faq
                                  {/* <Link to="About"  className={style.link}> Faq </Link> */}
                              </li>
                             
                              </div>
                          </ul>
                          
                  </div>
                  {/* col */}
                  </div>
              </div>
              
        </div>
      </main>
    </div>
   
  )
}

export default Futter