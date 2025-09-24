import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-40'>
      <Navbar />
      <Mainroutes />
    </div>

  )
}

export default App