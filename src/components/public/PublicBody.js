import React, { lazy, Suspense } from 'react'
import welcomeimage from '../../assets/welcome-page-3.jpg'
import ayamBanyak from '../../assets/ayam-banyak.png'
import Spinner from '../../utils/Spinner';
const LazyImage = lazy(() => import('../../utils/LazyImage'));

const PublicBody = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-orange-2" >


      <div className="w-full lg:w-1/3 hidden lg:block relative">
        <Suspense fallback={<Spinner/>}>
          <LazyImage
            src={welcomeimage}
            alt="Image"
            className="absolute w-full h-full object-cover"
          />
        </Suspense> {/* </div> End of Left */}
      </div>


      <div className="w-full p-12 md:p-10 lg:py-48 lg:px-24">
        <h2 className="sm:text-5xl text-4xl font-bold text-gray-800">
          What is Chicken Counter?
        </h2>
        <p className="sm:text-xl text-md mt-8 text-black">
        "Chicken Counter" is an innovative IoT application that employs the ESP32-CAM 
        to capture images of chickens in a coop and utilizes advanced machine learning algorithms to provide 
        real-time estimates of the current chicken population. This groundbreaking technology offers accurate and efficient monitoring of poultry farms, 
        ensuring precise data for better farm management.  
        </p>
      </div>{/*  End of Center Texzt */}

      
      <div className="flex items-center w-1/3 mt-36 bg-orange-2 pr-12 hidden sm:block">
          <img
            src={ayamBanyak}
            alt="Image"
          />
      </div> {/*  End of Right IMG */}

    </div> 
  )
}

export default PublicBody