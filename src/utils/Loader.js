import React from "react";
import Lottie from "react-lottie";
import loader from "../assets/loading-chicken-2.json";

const Loader = () => {
  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <div className="loading-container items-center justify-center">
      <Lottie options={loaderOptions} height={200} width={200} />
    </div>
  );
};

export default Loader;
