import React, { useEffect, useLayoutEffect } from 'react'

const Home = () => {
useLayoutEffect(() => {
  
  console.log("Hello");
}, []);
useEffect(()=>{
  console.log("Hi");
  
},[])

  return (
    <div>Home</div>
  )
}

export default Home