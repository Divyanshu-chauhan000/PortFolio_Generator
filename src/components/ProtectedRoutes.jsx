import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({children}) => {
  const isAuthenticated = localStorage.getItem('auth'); 
  if(!isAuthenticated) {
    return <Navigate to = '/login' replace/>
  }
  return (
    children
  )
}

export default ProtectedRoutes