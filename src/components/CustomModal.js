import React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CustomModal = ({ isOpen, onClose, acceptText, icon, onAccept }) => {
  const handleAccept = () => {
    onAccept(); // Call the callback function when OK is clicked
    onClose(); // Close the modal
  };
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          borderRadius: 6, // Add rounded corners
          border: "2px solid #FFB347", // Remove border
          boxShadow: 24,
          p: 2,
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8">{icon}</div>
          <div className="text-center" id="modal-description">
            {acceptText}
          </div>
          <Button
            onClick={handleAccept}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            OK
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  acceptText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
};

export default CustomModal;
