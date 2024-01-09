import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import PointSpread from './PointSpread'
import OUTotal from './OUTotal'
import About from './About'

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pointspread" element={<PointSpread/>}/>
        <Route path="/outotal" element={<OUTotal/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default Pages