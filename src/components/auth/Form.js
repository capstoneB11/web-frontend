// Form.js (Reusable Form Component)
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({
  title,
  buttonText,
  showPasswordConfirm,
  isLogin,
  onSubmit,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handlePasswordChange(password) {
    const passwordInput = document.getElementById("password");
    const validationMessage = document.getElementById(
      "password-validation-msg"
    );
    const passwordPattern = /^[\S]{8,}$/;

    if (passwordPattern.test(password)) {
      passwordInput.classList.remove("border-red-500");
      validationMessage.textContent = "";
      setPassword(password); // Set the email only when it's valid
      setValidPassword(true);
    } else {
      passwordInput.classList.add("border-red-500");
      validationMessage.textContent = "Password Terlalu Pendek";
      setValidPassword(false);
    }
  }

  function handleEmailChange(email) {
    const emailInput = document.getElementById("email");
    const validationMessage = document.getElementById("email-validation-msg");
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Basic email pattern

    if (emailPattern.test(email)) {
      emailInput.classList.remove("border-red-500");
      validationMessage.textContent = "";
      setEmail(email); // Set the email only when it's valid
      setValidEmail(true);
    } else {
      emailInput.classList.add("border-red-500");
      validationMessage.textContent = "Pola Email Tidak Valid!";
      setValidEmail(false);
    }
  }

  return (
    <div className="w-full lg:w-1/2 flex bg-white items-center justify-center lg:justify-center h-screen">
      <div className="mx-6 w-full md:w-3/5 p-8 bg-white rounded-lg shadow-2xl text-left">
        <h1 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 mb-6">
          {isLogin ? "Masukkan Informasi Anda" : "Masukkan Informasi Anda"}
        </p>

        <form
          onSubmit={(e) =>
            onSubmit(e, email, password, username, passwordConfirm)
          }
        >
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Username
              </label>
              <input
                required
                type="Username"
                id="Username"
                name="Username"
                placeholder="Namaku"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="chickount@mail.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <div id="email-validation-msg" className="text-red-600"></div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <div id="password-validation-msg" className="text-red-600"></div>
          </div>

          {showPasswordConfirm && (
            <div className="mb-6">
              <label htmlFor="passwordConfirm" className="block text-gray-600">
                Tulis Ulang Password
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
            {isLogin ? "Belum Punya akun? " : "Sudah Punya Akun? "}
            <Link
              to={isLogin ? "/register" : "/login"}
              className="text-blue-400 hover:text-blue-600"
            >
              {isLogin ? "Daftar Disini" : "Masuk Disini"}
            </Link>
          </p>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded ${
              !validEmail || !validPassword
                ? "bg-gray-1 text-black cursor-not-allowed"
                : "bg-orange-4 text-white hover:bg-orange-3"
            }`}
            disabled={!validEmail || !validPassword}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
