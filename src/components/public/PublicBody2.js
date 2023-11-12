import React, { lazy, Suspense } from "react";
import welcomeimage from "../../assets/welcome-page-5.jpg";
import ayamBanyak from "../../assets/ayam-kandang.png";
import Spinner from "../../utils/Spinner";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const PublicBody = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-orange-3">
      <div className="flex items-center w-1/3 mx-16 mt-36 bg-orange-3 hidden lg:block">
        <img src={ayamBanyak} alt="Image" />
      </div>{" "}
      <div className="w-full p-12 md:p-10 lg:py-48 lg:px-2">
        <h2 className="sm:text-5xl text-4xl font-bold text-white hover:scale-110 transition-transform duration-300">
          Mengapa kami membuat Chicken Counter?
        </h2>
        <p className="sm:text-xl text-md mt-8 text-black pr-12">
          Integrasi Machine Learning (ML) dan Internet of Things (IoT) dalam
          Chicken Counter menciptakan solusi terkini dalam manajemen peternakan.
          Dengan memanfaatkan ML, sistem dapat menghitung kebutuhan pangan dan
          meramalkan keuntungan, sedangkan IoT memungkinkan pengumpulan data
          secara real-time melalui ESP32-Cam yang terpasang pada setiap kandang
          ayam. Otomasi yang dihasilkan dari kolaborasi ini memberikan kemudahan
          dalam mengelola dan menghitung populasi ayam, dengan sistem yang dapat
          memberikan informasi akurat secara otomatis, meminimalkan intervensi
          manual, dan meningkatkan efisiensi operasional peternakan.
        </p>
      </div>
      {/*  End of Center Texzt */}
      {/*  End of Right IMG */}
      <div className="w-full lg:w-1/3 hidden lg:block relative">
        <Suspense fallback={<Spinner />}>
          <LazyImage
            src={welcomeimage}
            alt="Image"
            className="absolute w-full h-full object-cover"
          />
        </Suspense>{" "}
        {/* </div> End of Left */}
      </div>
    </div>
  );
};

export default PublicBody;
