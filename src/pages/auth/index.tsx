import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
const  Dashboard = lazy(() => import('./Dashboard')) 
const Login  = lazy( () => import('./Login') ) 


const AuthRoutes: React.FC = () : JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path = "/*" element = {<Navigate to = "/404" />} />
    </Routes>
    </>
  )
}

export default AuthRoutes