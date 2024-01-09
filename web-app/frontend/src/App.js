import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Pages from './pages/Pages'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
