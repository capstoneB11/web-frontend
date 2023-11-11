import React, { useEffect, useState } from "react";
import PublicBanner from "../../components/public/PublicBanner";
import PublicBody from "../../components/public/PublicBody";
import Steps from "../../components/public/Steps";
import Team from "../../components/public/Team";
import PublicBody2 from "../../components/public/PublicBody2";
import Footer from "../../components/public/Footer";
import Trial from "../../components/public/Trial";

const Public = () => {
  const [scrollY, setScrollY] = useState(0);
  const [topSectionHeight, setTopSectionHeight] = useState("100vh"); // Initial height

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the top section's height based on the scroll position
    const newHeight = 100 - scrollY * 0.3; // Adjust the multiplier for desired speed
    setTopSectionHeight(`${newHeight}vh`);
  }, [scrollY]);

  return (
    <div>
      {/* Top Section */}
      <PublicBanner topSectionHeight={topSectionHeight} />{" "}
      {/* Pass topSectionHeight as a prop */}
      {/* Second Section */}
      <PublicBody />
      <Steps />
      <PublicBody2 />
      <Team />
      <Footer />
    </div>
  );
};

export default Public;
