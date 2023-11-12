import React, { lazy, Suspense } from "react";
import welcomeimage from "../../assets/welcome-page-3.jpg";
import ayamBanyak from "../../assets/ayam-banyak.png";
import Spinner from "../../utils/Spinner";
const LazyImage = lazy(() => import("../../utils/LazyImage"));

const PublicBody = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-orange-3">
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
      <div className="w-full p-8 md:p-10 lg:py-48 lg:px-24">
        <h2 className="hover:scale-110 transition-transform duration-300 sm:text-5xl text-3xl font-bold text-white">
          Apa itu Chicken Counter?
        </h2>
        <p className="sm:text-xl text-sm mt-4 sm:mt-8 text-black overflow-hidden">
          Chicken Counter adalah sebuah sistem yang dirancang untuk mengautomasi
          proses penghitungan jumlah ayam broiler dalam sebuah kandang. Chicken
          Counter memanfaatkan teknologi IoT dan Machine Learning untuk
          memprediksi jumlah ayam. Hasil perhitungan ditampilkan di sebuah
          dashboard web.
        </p>
      </div>
      {/*  End of Center Texzt */}
      <div className="flex items-center w-1/3 mt-36 bg-orange-3 pr-12 hidden lg:block">
        <img src={ayamBanyak} alt="Image" />
      </div>{" "}
      {/*  End of Right IMG */}
    </div>
  );
};

export default PublicBody;
