import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import logo from '../assets/logo.png'
import Button from './Button';
import MouseTrail from '../components/cursor';
import { Authcontext } from '../contexts/AuthContext';
const Navbar = () => {
 const {isAuth , logout} = useContext(Authcontext)
  return (
    <div>
      <MouseTrail/>
      <nav className='bg-indigo-600 flex justify-between items-center  p-4  px-8 text-white'>
        <div >
          <img src={logo} width={120} alt="" />
        </div>
        <div>
          <ul className='flex space-x-6 text-peach font-semibold'>
            <NavLink className={({isActive})=>`relative text-white hover:text-yellow-300 transition duration-300 
                after:content-[''] after:absolute  after:bottom-0 after:h-1 
                after:bg-[#FFCBA4] after:transition-all after:duration-300 after:ease-in-out 
                ${isActive ? "after:w-full after:left-0" : "after:w-0 hover:after:w-full after:left-1/2 hover:after:left-0"}`
              }     to="/">Home</NavLink>
            <NavLink className={({isActive})=>`relative text-white hover:text-yellow-300 transition duration-300 
                after:content-[''] after:absolute  after:bottom-0 after:h-1 
                after:bg-[#FFCBA4] after:transition-all after:duration-300 after:ease-in-out 
                ${isActive ? "after:w-full after:left-0" : "after:w-0 hover:after:w-full after:left-1/2 hover:after:left-0"}`
                } to="/examples">GitHub PortFolios</NavLink>
            <NavLink className={({isActive})=>`relative text-white hover:text-yellow-300 transition duration-300 
                after:content-[''] after:absolute  after:bottom-0 after:h-1 
                after:bg-[#FFCBA4] after:transition-all after:duration-300 after:ease-in-out 
                ${isActive ? "after:w-full after:left-0" : "after:w-0 hover:after:w-full after:left-1/2 hover:after:left-0"}`
              } to="pricing">Pricing</NavLink>
            <NavLink className={({isActive})=>`relative text-white hover:text-yellow-300 transition duration-300 
                after:content-[''] after:absolute  after:bottom-0 after:h-1 
                after:bg-[#FFCBA4] after:transition-all after:duration-300 after:ease-in-out 
                ${isActive ? "after:w-full after:left-0" : "after:w-0 hover:after:w-full after:left-1/2 hover:after:left-0"
              }`} to="learn">Learn</NavLink>
            <NavLink className={({isActive})=>`relative text-white hover:text-yellow-300 transition duration-300 
                after:content-[''] after:absolute  after:bottom-0 after:h-1 
                after:bg-[#FFCBA4] after:transition-all after:duration-300 after:ease-in-out 
                ${isActive ? "after:w-full after:left-0" : "after:w-0 hover:after:w-full after:left-1/2 hover:after:left-0"}`
              } to="contact">Contact</NavLink>
          </ul>
        </div>
        <div className='flex space-x-6 items-center'>
        <ul>
        {isAuth ? (
      <Button text="Logout" onClick={logout} />
    ) : (
      <NavLink to="/login">
        <Button text="Login" />
      </NavLink>
    )}
        </ul>
            <NavLink to='/create'><Button text="Create Your PortFolio" icon={<FaArrowCircleRight/>}/></NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
// Create Your Own Portfolio <FaArrowCircleRight />