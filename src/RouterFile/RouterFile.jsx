import React from 'react'

import File from '../File/File'
import Allproduct from '../allproduct/Allproduct'
import Groceries from '../Groceries/Groceries'
 import Meat from '../Meat/Meat'
 import Login from '../login/Login'
 import About from '../FAQ/About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Router() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<File/>}/>
            <Route path="All Product" element={<Allproduct/>}/>
            <Route path="Groceries" element={<Groceries/>}/>
            <Route path="Meat" element={<Meat/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Faq' element={<About/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Router
