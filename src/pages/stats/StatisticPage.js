import React from "react";
import TrackerPage from "../tracker/TrackerPage";
import SummaryPage from "../summary/SummaryPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import useUserToken from "../../hooks/useUserToken";
import CustomModal from "../../components/CustomModal";
import { useNavigate } from "react-router-dom";

const StatisticPage = () => {
  const { userToken, username, showAlert } = useUserToken();
  const navigate = useNavigate();

  return (
    <div>
      <CustomModal
        isOpen={showAlert}
        onClose={() => {
          return false;
        }}
        acceptText="Oops! Kamu Belum Masuk dengan Akun"
        icon={<FontAwesomeIcon icon={faWarning} size="2x" color="red" />}
        onAccept={() => {
          navigate("/login");
        }}
      />
      <TrackerPage username={username} userToken={userToken} />
      <SummaryPage userToken={userToken} />
    </div>
  );
};

export default StatisticPage;
