import React, { useState } from 'react'

import style from './About.module.css'

import Faq from './Faq.jsx'
import data from './data.json'
import Naver from '../Naver/Naver.jsx'
function About() {
  const[faq ,setFaq]=useState(data)
  return (
    <div>
      <Naver/>
      <main className={style.container}>
        <section className={style.faq}>
          <h1 className={style.h1}> FAQ </h1>
          {
            faq.map((x)=> <Faq key={x.id} faqs={x}/>)
          }
        </section>
      </main>
    </div>
  )
}

export default About