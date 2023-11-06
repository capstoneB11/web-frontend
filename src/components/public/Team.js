import React from "react";
import StepsItem from "./StepsItem";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";

const Steps = () => {
  return (
    <div className="p-8 lg:px-8 lg:py-20 bg-orange-2">
      <h2 className="px-4 text-2xl sm:text-4xl font-bold text-gray-800 text-center sm:mb-20">
        Bagaimana Chicken Counter bekerja?
      </h2>
      <div className="items-center lg:items-start flex flex-col lg:flex-row bg-orange-2 py-4 md:px-40 lg:justify-start">
        <StepsItem
          imageItem={image1}
          textTitle={"Pasang ESP32-CAM"}
          textBody={"ESP32-CAM diletakkan di beberapa sudut kandang ayam"}
          style={{ flex: 1 }}
        />
        <StepsItem
          imageItem={image2}
          textTitle={"Mengambil gambar ayam"}
          textBody={
            "Kamera ESP32-CAM akan mengambil gambar-gambar ayam di kandang"
          }
          style={{ flex: 1 }}
        />
        <StepsItem
          imageItem={image3}
          textTitle={"Gambar diproses di cloud"}
          textBody={
            "Gambar  dari ESP32-CAM akan diolah menggunakan algoritma Machine Learning"
          }
          style={{ flex: 1 }}
        />
        <StepsItem
          imageItem={image4}
          textTitle={"Hasil tampil pada dashboard"}
          textBody={
            "Hasil perhitungan ayam menggunakan ML akan ditampilkan di dashboard peternak"
          }
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default Steps;