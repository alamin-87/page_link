import React from 'react'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
     <div className='w-[100%] h-[400px] bg-[#4E31AA] flex items-center justify-center'>
        <h1 className='text-7xl font-serif font-bold text-[#800000]'>Home Page</h1>
    </div>
    </>
   
  )
}

export default Home