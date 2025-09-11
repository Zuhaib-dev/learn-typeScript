import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 py-10 text-xl'>
        <Link  href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/product'>Product</Link>
        <Link href='/service'>Services</Link>
    </div>

  )
}

export default Navbar