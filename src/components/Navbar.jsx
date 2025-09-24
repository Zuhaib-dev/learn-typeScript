import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 text-2xl mt-5'>
      <NavLink className={(e)=>e.isActive ? "text-rose-600" : ""} to={'/'}>Home</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-rose-600" : ""} to={'/products'}>Products</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-rose-600" : ""} to={'/users'}>Users</NavLink>
    </div>
  )
}

export default Navbar