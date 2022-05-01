import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import AuthRoutes from '../pages/auth'
import LandingRoutes from '../pages/landing'
import TicketRoutes from '../pages/ticket'

import PrivateRoutes from './Private.routes'
import PublicRoutes from './Public.routes'

const NotFound = React.lazy(() => import("../pages/404"))

const Router : React.FC =  () => {
  return (
    <React.Suspense  fallback = { <div> ... loading</div>}>
        <Routes>
            <Route  path='*' element = {<LandingRoutes/>}/>
            <Route  element = {<PublicRoutes/>}>
              <Route  path = "auth/*" element = {<AuthRoutes/>}/>
            </Route>
            <Route element ={<PrivateRoutes/>}>
              <Route path='ticket/*' element = {<TicketRoutes/>} />
            </Route>          
            <Route path='/404' element = {<NotFound/>}/>
        </Routes>
    </React.Suspense>
  )
}

export default Router