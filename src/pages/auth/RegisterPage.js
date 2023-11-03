import { React, useState, lazy, Suspense } from 'react'
import Form from '../../components/auth/Form'
import signUp from '../../lib/firebase/signUp'
import Spinner from '../../utils/Spinner'
const LazyImage = lazy(() => import('../../utils/LazyImage'));

const RegisterPage = () => {

  const handleRegisterSubmit = async (e, email, password, passwordConfirm) => {
    e.preventDefault();
  
    if (password !== passwordConfirm) {
      window.alert("Password and confirmation do not match.");
      return;
    }
  
    const { result, error } = await signUp(email, password);
  
    if (error) {
      window.alert(`something went wrong : ${error}`);
    } else {
      console.log(result);
      window.alert("Registration successful!");
      // Registration successful, you can add any further logic here
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
        <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
          <Suspense fallback={<Spinner/>}>
            <LazyImage 
            src="/svg/login-image.svg" 
            alt="Welcome" 
            className="w-full h-full object-cover object-center" />
          </Suspense>
        </div>

        <Form
            title="Create your account"
            buttonText="Register"
            showPasswordConfirm={true}
            isLogin={false}
            onSubmit={handleRegisterSubmit}/>

    </div>
  )
}

export default RegisterPage