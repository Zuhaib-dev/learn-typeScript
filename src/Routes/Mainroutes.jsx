import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Anime from '../pages/Anime'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/anime" element={<Anime />} />
    </Routes>
  )
}

export default MainRoutes
