import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'



const  Dashboard = lazy(() => import('./Dashboard')) 
const TicketRef  = lazy( () => import("./TicketRef") ) 
const  ViewFaq  = lazy (() => import('./ViewFaq'))
const  RegisterTicket = lazy(() => import('./RegisterTicket'))
const  AgentLogin = lazy(() => import('./agent/AgentLogin')) 

const AuthRoutes: React.FC = () : JSX.Element => {
  return (
    <>
    <Routes>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      <Route path='/ticket-ref' element = {<TicketRef/>}/>
      <Route path = "/view-faq"  element = {<ViewFaq/>}/>
      <Route path = "/register-ticket" element = {<RegisterTicket/>} />
      {/* agent routes */}
      <Route path = "/agent/login" element = {<AgentLogin/>}/>
      <Route path = "/*" element = {<Navigate to = "/404" />} />
    </Routes>
    </>
  )
}

export default AuthRoutes