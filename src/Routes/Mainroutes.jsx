import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Anime from '../pages/Anime'
import Joke from '../pages/Joke'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/jokes" element={<Joke />} />
    </Routes>
  )
}

export default MainRoutes
