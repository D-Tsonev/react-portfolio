import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <header>
    <nav className='navbar'>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  </header>
  )
}

export default Header