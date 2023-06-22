import React from 'react'
import logo from '../assets/logo.png'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='nav'>
        <div className='header'><img src={logo}/></div>
        <div className='navLink'>
            <ul>
                <button>Hire a Developer</button>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}