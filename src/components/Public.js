import React from 'react';
import LoginForm from './auth/login/LoginForm';

const Public = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">

      {/* Left Side (Image) - Hidden on Small Screens */}
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <img 
          src="https://picsum.photos/200/300" 
          alt="Welcome" 
          className="w-full h-full object-cover object-center" />
      </div>

      {/* Right Side (Sign-in Form) */}
      <LoginForm/>

    </div>
  );
};

export default Public;
