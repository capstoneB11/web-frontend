import React, {lazy, Suspense} from 'react'
import Form from '../../components/auth/Form'
import LoginImage from '../../assets/welcome-page-4.jpg'
import signIn from '../../lib/firebase/signIn'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../utils/Spinner'
const LazyImage = lazy(() => import('../../utils/LazyImage'))

const LoginPage = () => {
  
  const navigate = useNavigate();

  const handleLoginSubmit = async (e, email, password) => {
    e.preventDefault();
  
    const { result, error } = await signIn(email, password);

    const userToken = await result.user.getIdToken()
  
    if (error) {
      window.alert(`something went wrong : ${error}`);
    } else {
      console.log(result);
      window.alert("Login successful!");
      // Store the token in local storage
      localStorage.setItem('userToken', userToken);
      window.alert("Login successful!");

      // Redirect to the dashboard/home route
      navigate('/dashboard/home');
      // Registration successful, you can add any further logic here
    }
  };

  return (

    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
      {/* Left Side (Image) - Hidden on Small Screens */}
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <Suspense fallback={<Spinner/>}>
          <LazyImage 
            src={LoginImage}
            alt="Welcome" 
            className="w-full h-full object-cover object-center" />
        </Suspense>
      </div>

      {/* Right Side (Sign-in Form) */}
      <Form
        title="Welcome back!"
        buttonText="Sign In"
        showPasswordConfirm={false}
        isLogin={true}
        onSubmit={handleLoginSubmit}/>

    </div>
  )
}

export default LoginPage