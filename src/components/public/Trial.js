import React from "react";
import ayamBanyak from "../../assets/ayam-banyak.png";
import Dropzone from "./Dropzone";

const Trial = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-orange-5 items-center justify-center">
      <div className="px-10 lg:px-20 justify-center">
        <h2 className="sm:text-5xl text-4xl font-bold text-black justify-center">
          Coba Model Machine Learning kami! 🐔
        </h2>
        <p className="sm:text-xl text-md my-8 text-black">
          Setelah upload, model kami akan mengembalikan jumlah ayam diprediksi
          dalam gambar tersebut.
        </p>
      </div>
      <div className="w-full justify-center px-10">
        <Dropzone />
      </div>
    </div>
  );
};

export default Trial;
