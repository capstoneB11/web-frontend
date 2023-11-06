import React, {useState} from 'react'
import ReactSwitch from "react-switch";
import { formatDate } from '../../utils/formatDate';
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = ({ imageCarouselData }) => {

    const [selectedImage, setSelectedImage] = useState(0);


  return (
    <div>
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
  )
}

export default HomeCarousel