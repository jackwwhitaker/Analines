import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className='navbar'>
            <div className='leftnav'>
                <NavLink to='/'>
                    <img className='logo' src={require('../images/logo.png')} alt="logo"/>
                </NavLink>
            </div>
            <div className='navlist'>
                <NavLink className='navlink' to='/pointspread'>
                    Point Spread
                </NavLink>
                <NavLink className='navlink' to='/outotal'>
                    Over/Under Total
                </NavLink>
                <NavLink className='navlink' to='/about'>
                    About
                </NavLink>
            </div>
            <div className='rightnav'>
                <NavLink className='navbutton' to='/'>Sign In</NavLink>
            </div>
        </nav>
    )
}

export default Nav