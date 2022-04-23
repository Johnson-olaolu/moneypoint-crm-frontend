import React from 'react'
import MCustomInput from '../../components/forms/MCustomInput'

const Login = () => {
  return (
    <section className=' min-h-screen moneypoint-blue-gradient flex justify-center items-center'>
      <div className=" text-center">
        <h2 className=" text-white text-5xl font-medium">Issue Details</h2>
        <p className=" text-white text-3xl mt-12">Enter your Issue ID to view the updates about your issue</p>
        <MCustomInput/>
      </div>
      
    </section>
  )
}

export default Login