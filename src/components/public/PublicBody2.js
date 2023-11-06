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
          Chicken Counter adalah sebuah sistem yang dirancang untuk mengautomasi
          proses penghitungan jumlah ayam broiler dalam sebuah kandang. Chicken
          Counter memanfaatkan teknologi IoT dan Machine Learning untuk
          memprediksi jumlah ayam. Hasil perhitungan ditampilkan di sebuah
          dashboard web.
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
