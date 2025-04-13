import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email , setEmail] = React.useState('')
  const navigate = useNavigate()

  const handleLogin = async ()=>{
   try{
    await axios.post('https://localhost:5173/login-email', {email})
    Login();
    alert('Login successful')
   }
   catch{
    alert('Login failed')
   }
  }
  return (
    <div className='flex justify-center items-center h-[90vh]'>
      <div className='w-[30%] bg-gradient-to-r from-purple-700 to-peach p-6 rounded-lg shadow-lg space-y-4 text-center'>
        <div>
        <h1 className='text-3xl font-semibold'>
          Login to your account
        </h1>
        <p className='pt-2'>Enter your email address to log in to your account</p>
        </div>
        <div>
          <input className='w-full p-2' placeholder ="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
        </div>
        <div>
          <button onClick={handleLogin} className='w-full bg-red-300 p-2 rounded-md'>Login</button>
        </div>
        <div className='text-center'>
          <p>By proceeding you accept our <span className='text-blue-700'>Terms of Use</span> and <span className='text-blue-700'>Privacy Policy </span>and agree to receive future updates from PortFolio</p>
        </div>
        <div>
          <p className='text-center'>or</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <button className='w-full flex items-center gap-3 justify-center  bg-zinc-300 p-2 rounded-md'><span><img src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="" className='w-4' /></span>Continue with Google</button>
          <button className='w-full bg-gray-700 p-2 rounded-md flex items-center gap-3 justify-center'><span><img src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png" alt="" className='w-5'/></span>Continue with Facebook</button>
        </div>
      </div>
    </div>
  )
}

export default Login