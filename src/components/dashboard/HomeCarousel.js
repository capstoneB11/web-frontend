import React, { useState } from "react";
import ReactSwitch from "react-switch";
import { formatDate } from "../../utils/formatDate";
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = ({ withFrame, setWithFrame, imageCarouselData }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const toggleFrame = () => {
    setWithFrame(!withFrame); // Toggle the state of withFrame when the switch button is clicked
  };

  return (
    <div>
      <label className="flex items-center space-x-2 cursor-pointer">
        <ReactSwitch
          onChange={toggleFrame}
          checked={withFrame}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span
          className={`text-sm font-medium ${
            withFrame ? "text-indigo-600" : "text-gray-600"
          }`}
        >
          Tunjukkan Frame
        </span>
      </label>
      <Carousel
        showThumbs={false}
        selectedItem={selectedImage}
        onChange={(index) => setSelectedImage(index)}
      >
        {imageCarouselData.map((image, index) => (
          <div className="max-h-screen" key={index}>
            <div className="w-full h-screen flex items-center justify center">
              <img
                src={`${image.image}`}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover max-w-full"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        ))}
      </Carousel>
      <p>
        {`Gambar Diambil Pada: ${formatDate(
          imageCarouselData[selectedImage].timestamp
        )}`}
      </p>
    </div>
  );
};

export default HomeCarousel;
