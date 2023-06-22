import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='nav'>
        <div className='header'>Logo</div>
        <div className='navLink'>
            <ul>
                <li><button>Hire a Developer</button></li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}