import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({children}) => {
  const isAuthenticated = localStorage.getItem('isAuth'); 
  console.log(isAuthenticated, "isAuthenticated")
  if(!isAuthenticated) {
    return <Navigate to = '/login' replace/>
  }
  return (
    children
  )
}

export default ProtectedRoutes