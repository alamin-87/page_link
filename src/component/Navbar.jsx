import React from 'react'
import mylogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='py-[20px] bg-[#C8A1E0]'>
        <div className="container">
            <div className="nav_row flex items-center justify-between">
                <div className="nav_logo">
                   <a href="#"> <img className='w-[80px] h-auto' src={mylogo} alt="logo" /></a>
                </div>
                <div className="nav_contant">
                    <ul className=' w-[247px] flex justify-between'>
                        <li> <Link className='text-black text-lg font-serif font-medium hover:text-white hover:font-bold transition-[.4s] w-[56px] inline-block' to="/">Home</Link></li>
                        <li> <Link className='text-black text-lg font-serif font-medium hover:text-white hover:font-bold transition-[.4s] w-[56px] inline-block' to="/about">About</Link></li>
                        <li> <Link className='text-black text-lg font-serif font-medium hover:text-white hover:font-bold transition-[.4s] w-[56px] inline-block' to="/help">Help</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar