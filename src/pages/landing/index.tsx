import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


const HomePage = lazy(() => import ("./HomePage"))

const LandingRoutes : React.FC = () : JSX.Element => {
  return (
    <>
    <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/*" element = {<Navigate to ="/404"/>} />
    </Routes>
    </>
  )
}

export default LandingRoutes