import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUserToken = () => {
  const [username, setUsername] = useState("");
  const [userToken, setUserToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("userToken");
    let usernameFromLocalStorage = localStorage.getItem("username");

    // Set a default username if it's not present in local storage
    usernameFromLocalStorage = usernameFromLocalStorage || "Peternak";

    if (tokenFromLocalStorage) {
      setUserToken(tokenFromLocalStorage);
      setUsername(usernameFromLocalStorage);
    } else {
      setShowAlert(true);
    }

    if (usernameFromLocalStorage === null) {
    }
  }, []);
  // Return both userToken and a function to show the modal
  return { userToken, username, showAlert };
};

export default useUserToken;
