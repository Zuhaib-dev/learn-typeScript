"use client"
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} =useParams()
  return (
    <div>
        <Navbar />
        <h1>
            This is a Dynamic route of {id}
        </h1>
        <Footer />
    </div>
  )
}

export default page