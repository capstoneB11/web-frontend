import { React, useState, lazy, Suspense } from "react";
import Form from "../../components/auth/Form";
import RegisterImage from "../../assets/welcome-image-2.webp";
import signUp from "../../lib/firebase/signUp";
import Spinner from "../../utils/Spinner";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../../components/CustomModal";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const RegisterPage = () => {
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
    navigate("/login");
  };

  const handleDoNothing = () => {};

  const handleRegisterSubmit = async (e, email, password, passwordConfirm) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setModalContent({
        acceptText: "Kedua Input Password tidak cocok.",
        icon: <FontAwesomeIcon icon={faWarning} size="2x" color="red" />,
        onAccept: handleDoNothing,
      });
      setModalOpen(true);
      return;
    }

    const { result, error } = await signUp(email, password);

    if (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setModalContent({
            acceptText: "Akun Dengan Email ini sudah ada.",
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
      console.log(result);
      setModalContent({
        acceptText: "Registrasi Berhasil!",
        icon: <FontAwesomeIcon icon={faCircleCheck} size="2x" color="green" />,
        onAccept: handleAccept,
      });
      setModalOpen(true);
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

export default RegisterPage;
