import React from 'react'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">

      {/* Left Side (Image) - Hidden on Small Screens */}
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <img 
          src="/svg/login-image.svg" 
          alt="Welcome" 
          className="w-full h-full object-cover object-center" />
      </div>

      {/* Right Side (Sign-in Form) */}
      <LoginForm/>

    </div>
  )
}

export default LoginPage