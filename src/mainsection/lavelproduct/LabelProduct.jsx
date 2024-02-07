import React from 'react'

import style from './lavelproduct.module.css'

import Lavel from './Lavel'
import PageRole from '../../Homepage/role/PageRole'
import data from './label.json'
import Pageroll2 from '../../Homepage/role/Pageroll2'
import Product from '../mainCard/Product'
function LabelProduct() {
  return (
    <div>
      <div className='container'>
        <h1>Lavel Product</h1>
      <div className={style.container}>
        <div className={style.name}>
          {
            data.map((x)=>{
              return<Lavel img={x.img}/>
            })
          }
      </div>
      </div>
      </div>
      <Pageroll2/>
      <Product/>
      <PageRole/>
    </div>
  )
}

export default LabelProduct
