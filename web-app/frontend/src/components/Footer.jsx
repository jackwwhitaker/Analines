import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h1 className='footertitle'>Contact</h1>
            <div className='line'/>
            <div className='footerlist'>
                <a>jackwwhitaker@gmail.com</a>
                <a href='https://www.linkedin.com/in/jack-whitaker-jww' className='footerlink'> www.linkedin.com/in/jack-whitaker-jww</a>
                <a href='https://github.com/jackwwhitaker' className='footerlink'>github.com/jackwwhitaker</a>
            </div>
        </div>
    )
}

export default Footer