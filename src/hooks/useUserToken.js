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
  // Return both userToken and a function to show the modal
  return { userToken, showAlert };
};

export default useUserToken;
