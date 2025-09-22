import React, { useContext } from 'react'
import { DataContext } from './context/UserContext'

const App = () => {
  const userName = useContext(DataContext)
  return (
    <div>App {userName}</div>
  )
}

export default App