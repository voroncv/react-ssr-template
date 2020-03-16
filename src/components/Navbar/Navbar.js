import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        Index page
      </NavLink>
      <NavLink to="/test">
        Test page
      </NavLink>
    </header>
  )
}

export default Navbar
