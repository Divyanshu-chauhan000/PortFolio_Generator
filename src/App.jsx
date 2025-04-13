import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Examples from './pages/Examples';
import Preview from './pages/Preview'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes';
const App = () => {
  return (
    <div>
     
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/examples' element={<ProtectedRoutes><Examples/></ProtectedRoutes>} />
        <Route path='/create' element={<ProtectedRoutes><Create/> </ProtectedRoutes>}/>
        <Route path='/preview' element = {<ProtectedRoutes><Preview/></ProtectedRoutes>} />
       </Routes>
    </div>
  )
}

export default App