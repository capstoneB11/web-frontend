import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUserToken = () => {
  const [userToken, setUserToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("userToken");

    if (tokenFromLocalStorage) {
      setUserToken(tokenFromLocalStorage);
    } else {
      setShowAlert(true);
    }
  }, []);

  useEffect(() => {
    if (showAlert) {
      window.alert("Oops! Kamu belum login! 🥺🐔");
      navigate("/login");
    }
  }, [showAlert, navigate]);

  return userToken;
};

export default useUserToken;
