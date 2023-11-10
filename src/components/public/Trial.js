import React from "react";
import ayamBanyak from "../../assets/ayam-banyak.png";
import Dropzone from "./Dropzone";

const Trial = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-orange-2 items-center justify-center">
      <div className="w-full lg:h-1/2 p-8 mx-8">
        <h2 className="sm:text-5xl text-4xl font-bold text-black">
          Coba Model Machine Learning kami! 🐔
        </h2>
        <p className="sm:text-xl text-md mt-8 text-black pr-12">
          Setelah upload, model kami akan mengembalikan jumlah ayam diprediksi
          dalam gambar tersebut.
        </p>
      </div>
      <div className="w-full p-12 md:p-10 lg:py-48 lg:px-8 mx-8">
        <Dropzone />
      </div>
    </div>
  );
};

export default Trial;
