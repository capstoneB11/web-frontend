import React, { useState, Suspense, lazy } from "react";
import Form from "../../components/auth/Form";
import LoginImage from "../../assets/welcome-page-4.jpg";
import signIn from "../../lib/firebase/signIn";
import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import { faWarning, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../../components/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const LoginPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    acceptText: "",
    icon: null,
    onAccept: () => {},
  });

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAccept = () => {
    navigate("/dashboard/home");
  };

  const handleDoNothing = () => {};

  const handleLoginSubmit = async (e, email, password) => {
    e.preventDefault();

    try {
      const { result, error } = await signIn(email, password);

      if (error) {
        // Handle specific error cases
        switch (error.code) {
          case "auth/invalid-login-credentials":
            setModalContent({
              acceptText: "Akun Belum Terdaftar Atau Password Salah.",
              icon: <FontAwesomeIcon icon={faWarning} size="2x" color="red" />,
              onAccept: handleDoNothing,
            });
            setModalOpen(true);
            break;
          default:
            setModalContent({
              acceptText: `Ada Kesalahan : ${e}`,
              icon: <FontAwesomeIcon icon={faWarning} size="2x" color="red" />,
              onAccept: handleDoNothing,
            });
            setModalOpen(true);
            break;
        }
      } else {
        const userToken = result.user.uid;

        // Store the token in local storage
        localStorage.setItem("userToken", userToken);

        console.log(result);
        setModalContent({
          acceptText: "Login Berhasil!",
          icon: (
            <FontAwesomeIcon icon={faCircleCheck} size="2x" color="green" />
          ),
          onAccept: handleAccept,
        });
        setModalOpen(true);
      }
    } catch (e) {
      console.error("Error:", e);
      setModalContent({
        acceptText: `Ada Kesalahan : ${e}`,
        icon: <FontAwesomeIcon icon={faWarning} size="2x" color="red" />,
        onAccept: handleDoNothing,
      });
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-gray-100">
      {/* Left Side (Image) - Hidden on Small Screens */}
      <div className="hidden lg:block lg:w-1/2 h-1/3 lg:h-screen bg-cover bg-center relative">
        <Suspense fallback={<Spinner />}>
          {/* Adjust the path as needed */}
          <LazyImage
            src={LoginImage}
            alt="Welcome"
            className="w-full h-full object-cover object-center"
          />
        </Suspense>
      </div>

      {/* Right Side (Sign-in Form) */}
      <Form
        title="Welcome back!"
        buttonText="Sign In"
        showPasswordConfirm={false}
        isLogin={true}
        onSubmit={handleLoginSubmit}
      />

      {/* Modal */}
      <CustomModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        acceptText={modalContent.acceptText}
        icon={modalContent.icon}
        onAccept={modalContent.onAccept}
      />
    </div>
  );
};

export default LoginPage;
