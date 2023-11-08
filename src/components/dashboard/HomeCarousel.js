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
      <Carousel
        showThumbs={false}
        selectedItem={selectedImage}
        onChange={(index) => setSelectedImage(index)}
      >
        {imageCarouselData.map((image, index) => (
          <div className="max-h-screen" key={index}>
            <div className="w-full my-8 flex items-center justify center">
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
      <p className="mb-2">
        {`Gambar Diambil Pada: ${formatDate(
          imageCarouselData[selectedImage].timestamp
        )}`}
      </p>
      <label className="flex items-center space-x-2 cursor-pointer">
        <ReactSwitch
          onChange={toggleFrame}
          checked={withFrame}
          offHandleColor="#8F8F8F"
          offColor="#D9D9D9"
          onColor="#FEDF9E"
          onHandleColor="#FF971A"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span
          className={`text-sm font-medium ${
            withFrame ? "text-orange-4" : "text-gray-600"
          }`}
        >
          Tunjukkan Frame
        </span>
      </label>
    </div>
  );
};

export default HomeCarousel;
