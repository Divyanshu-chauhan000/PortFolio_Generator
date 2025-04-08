import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-primary flex justify-between items-center  p-2  px-8 text-white'>
        <div >
          <img src={logo} width={120} alt="" />
        </div>
        <div>
          <ul className='flex space-x-6'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Examples</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='flex space-x-6 items-center'>
        <ul>
            <li><a href="#">Login</a></li>
        </ul>
            <button className='bg-blue-700 p-2 flex items-center gap-2'>Create Your Own Portfolio <FaArrowCircleRight /></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar