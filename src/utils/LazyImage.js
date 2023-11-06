// LazyImage.js
import React from "react";

const LazyImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default LazyImage;
