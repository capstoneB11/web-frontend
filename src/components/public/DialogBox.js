import React from 'react';

const DialogBox = ({ message, onClose }) => {
  return (
    <div className="dialog-box">
      <div className="dialog-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DialogBox;