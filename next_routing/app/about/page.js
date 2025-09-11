import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <h1 className='text-xl '>This is About Page</h1>
        <Footer />
    </div>
  )
}

export default page