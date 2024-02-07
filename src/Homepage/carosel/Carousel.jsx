import React from 'react'

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

import style from './carosol.module.css'

function Carousel() {
  return (
    <div className={style.carosol}>
      <div id="carouselExample" class="carousel slide pb-5 container">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={"https://dailyshoppingbd.com/images/promo/165/Winter23-19__1_.jpg "} class="d-block w-100" alt="..." className={style.img} />
    </div>

    <div class="carousel-item">
      <img src= {"https://dailyshoppingbd.com/images/promo/166/Dare_to_lead_oct_23-03__1_.jpg"}class="d-block w-100" alt="..." className={style.img} />
    </div>

    <div class="carousel-item">
      <img src={"https://dailyshoppingbd.com/images/promo/164/Mosquito_Top-Slider-phone_25-09-23.jpg"} class="d-block w-100" alt="..." className={style.img}/>
    </div>

  </div>
  <button class="carousel-control-prev"  type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <div className={style.previcon}><span ><GrFormPreviousLink/></span></div>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
   <div className={style.nexticon}> <span><GrFormNextLink/></span></div>
  </button>
</div>

    </div>
  )
}

export default Carousel
