import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='navbar-head'>Pranav Jain</h1>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>Excercise</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Clients</Link>
            </div>

                <button className="navbarBtn">Contact Me</button>

    </nav>
  )
}
