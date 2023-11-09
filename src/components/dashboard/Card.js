import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node, // To accept any valid React node
  className: PropTypes.string, // Custom class names if necessary
};

export default Card;
