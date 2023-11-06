import { React, useState, lazy, Suspense } from "react";
import Form from "../../components/auth/Form";
import RegisterImage from "../../assets/welcome-image-2.webp";
import signUp from "../../lib/firebase/signUp";
import Spinner from "../../utils/Spinner";
import { useNavigate } from "react-router-dom";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const RegisterPage = () => {

  const navigate = useNavigate();

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
      window.alert("Registrasi Berhasil!");

      navigate('/login');
      // Registration successful, you can add any further logic here
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <Suspense fallback={<Spinner />}>
          <LazyImage
            src={RegisterImage}
            alt="Welcome"
            className="w-full h-full object-cover object-center"
          />
        </Suspense>
      </div>

      <Form
        title="Create your account!"
        buttonText="Register"
        showPasswordConfirm={true}
        isLogin={false}
        onSubmit={handleRegisterSubmit}
      />
    </div>
  );
};

export default RegisterPage;
