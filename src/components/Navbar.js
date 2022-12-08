import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
      <NavLink to='/'>Home</NavLink>
   
      <NavLink to='/rent'>Rent</NavLink>
      <NavLink to='/sale'>Sale</NavLink>
      <NavLink to='/favourite'>Favourite</NavLink>
    </div> 
  )
}

export default Navbar