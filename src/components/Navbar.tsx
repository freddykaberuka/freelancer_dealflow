import React from 'react'
import logo from '../assets/logo.png'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='nav'>
        <div className='header'><img src={logo}/></div>
        <div className='navLink'>
            <ul>
                <button><a href='#'>Hire a Developer</a></button>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
    </div>
  )
}