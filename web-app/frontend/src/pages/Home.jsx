import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import NflBall from './../images/Nfl-Ball.jpg'
import NflCrest from './../images/Nfl-Crest.jpg'
import JordanLove from './../images/Jordan-Love.jpg'
import SportsBetting from './../images/Data-Background2.jpg'
import '@splidejs/react-splide/css'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='adbox'>
        <div className='maincard'>
          <img src={SportsBetting} className='mainimage'/>
          <h1 className='maintext'>Data Driven Analysis</h1>
          <p className='subtext'>Models entirely based on public data utilizing the latest innovative machine learning technology</p>
          <div className='maingradient'/>
        </div>
      </div>
      <div className='slidewrapper'>
        <Splide options={{
          drag: 'free',
          perPage: 2,
          gap: '2rem',
          extensions: [AutoScroll],
          autoplay: true,
          interval: 3000,
          type: 'loop'
        }}>
          <SplideSlide style={{display: 'flex', justifyContent: 'center'}}>
            <div className='slidecard'>
              <img src={NflBall} className='cardimage'/>
              <p className='slidetext'>Point Spread</p>
              <div className='gradient'/>
            </div>
          </SplideSlide>
          <SplideSlide style={{display: 'flex', justifyContent: 'center'}}>
            <div className='slidecard'>
              <img src={NflCrest} className='cardimage'/>
              <p className='slidetext'>Over/Under Total</p>
              <div className='gradient'/>
            </div>
          </SplideSlide>
          <SplideSlide style={{display: 'flex', justifyContent: 'center'}}>
            <div className='slidecard'>
              <img src={JordanLove} className='cardimage'/>
              <p className='slidetext'>About Us</p>
              <div className='gradient'/>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default Home