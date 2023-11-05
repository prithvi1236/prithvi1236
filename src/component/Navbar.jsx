import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>mecMatrimony</h1>
        <ul>
            <li>
              <Link  to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/add'}>Add Confession</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar