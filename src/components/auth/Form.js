// Form.js (Reusable Form Component)
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, buttonText, showPasswordConfirm, isLogin, onSubmit }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-center h-screen">
      <div className="w-full lg:w-96 p-8 bg-white rounded-lg shadow-lg text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">
          {isLogin ? "Welcome to our awesome platform." : "Create your account."}
        </p>

        <form onSubmit={(e) => onSubmit(e, email, password, passwordConfirm)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              required type="email"
              id="email"
              name="email"
              placeholder="chickount@mail.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {showPasswordConfirm && (
            <div className="mb-6">
              <label htmlFor="passwordConfirm" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
          )}

          <p className="text-gray-600 mb-4">
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link to={isLogin ? '/register' : '/login'} className="text-blue-500 hover:underline">
              {isLogin ? "Register here" : "Sign in here"}
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;