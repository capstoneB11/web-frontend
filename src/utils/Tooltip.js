import React, { useState } from "react";
import "../Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-container relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="tooltip absolute bg-gray-800 text-white p-2 rounded-md text-center whitespace-pre-wrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
