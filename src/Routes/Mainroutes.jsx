import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Anime from '../pages/Anime'
import Joke from '../pages/Joke'
import Burger from '../pages/Burger'
import BreakingBad from '../pages/BreakingBad'
import HarryPotter from '../pages/HarryPotter'
import GameOfThrones from '../pages/GameOfThrones'
import Memes from '../pages/Memes'
import TodoPage from '../pages/TodoPage'
import Cat from '../pages/Cat'
import DogBreed from '../pages/DogBreed'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/jokes" element={<Joke />} />
      <Route path="/burger" element={<Burger />} />
      <Route path="/breakingbad" element={<BreakingBad />} />
      <Route path="/Harrypotter" element={<HarryPotter />} />
      <Route path="/got" element={<GameOfThrones />} />
      <Route path="/memes" element={<Memes />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/cat" element={<Cat />} />
      <Route path="/dog" element={<DogBreed />} />
    </Routes>
  )
}

export default MainRoutes
