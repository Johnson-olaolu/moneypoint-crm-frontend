import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import AuthRoutes from '../pages/auth'
import LandingRoutes from '../pages/landing'

import PrivateRoutes from './Private.routes'
import PublicRoutes from './Public.routes'

const Router : React.FC =  () => {
  return (
    <React.Suspense  fallback = { <div> ... loading</div>}>
        <Routes>
            <Route  path='*' element = {<LandingRoutes/>}/>
            <Route path = "auth" element = {<PublicRoutes/>}>
                  <Route  path = "*" element = {<AuthRoutes/>}/>
            </Route>
            <Route path = "agent"  element = {<PrivateRoutes/>}>

            </Route>
            
            <Route path='/404' element = {<div>Not Found</div>}/>
        </Routes>
    </React.Suspense>
  )
}

export default Router