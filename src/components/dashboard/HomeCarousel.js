import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactSwitch from "react-switch";
import { formatDate } from "../../utils/formatDate";
import { Carousel } from "react-responsive-carousel";
import Spinner from "../../utils/Spinner";

const LazyImage = lazy(() => import("../../utils/LazyImage"));

const HomeCarousel = ({ withFrame, setWithFrame, imageCarouselData }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedCamera, setSelectedCamera] = useState("01");
  const [filteredData, setFilteredData] = useState([
    {
      image: "",
      uname: "",
      cam_part: "",
      part: "",
      count: 0,
      timestamp: new Date(),
    },
  ]);

  const toggleFrame = (value) => {
    setWithFrame(value);
  };

  useEffect(() => {
    // Update filteredData when withFrame or selectedCamera changes
    const updatedData = withFrame
      ? imageCarouselData.filter((image) => image.part === selectedCamera)
      : imageCarouselData.filter((image) => image.cam_part === selectedCamera);

    setFilteredData(updatedData);
  }, [withFrame, selectedCamera, imageCarouselData]);

  useEffect(() => {
    // Reset selectedImage to 0 when filteredData changes
    setSelectedImage(0);
    console.log(JSON.stringify(filteredData));
  }, [withFrame]);

  return (
    <div>
      <div className="mb-2 text-center">
        <p>{`Kamera: ${selectedCamera}`}</p>
        <label>
          Pilih Kamera:{" "}
          <select
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
          </select>
        </label>
      </div>

      <Carousel
        showThumbs={false}
        selectedItem={selectedImage}
        onChange={(index) => setSelectedImage(index)}
      >
        {filteredData.map((image, index) => (
          <div className="max-h-screen" key={index}>
            <div className="w-full my-8 flex items-center justify center">
              <Suspense fallback={<Spinner />}>
                <LazyImage
                  src={`${image.image}`}
                  alt={`Image ${index}`}
                  className="w-full h-auto object-cover max-w-full"
                  style={{ maxWidth: "100%" }}
                />
              </Suspense>
            </div>
          </div>
        ))}
      </Carousel>

      {filteredData[selectedImage]?.timestamp && (
        <p className="mt-4 mb-2">
          {`Gambar Diambil Pada: ${formatDate(
            filteredData[selectedImage].timestamp
          )}`}
        </p>
      )}
      <label className="flex items-center space-x-2 cursor-pointer">
        <ReactSwitch
          onChange={(value) => toggleFrame(value)}
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
