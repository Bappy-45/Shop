import React from 'react'

import Naver from '../Naver/Naver'
import Carousel from '../Homepage/carosel/Carousel'
import Roleer from '../Homepage/role/PageRole'
import Product from '../Homepage/Card/Product'
import Lavel from '../mainsection/lavelproduct/Lavel'

function Home() {
  return (
    <div>
      <Naver/>
      <Carousel/>
      <Roleer/>
      <Product/>
      
    </div>
  )
}

export default Home
