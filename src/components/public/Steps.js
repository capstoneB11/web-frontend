import React from 'react'
import StepsItem from './StepsItem'
import image1 from '../../assets/step1.png'
import image2 from '../../assets/step2.png'
import image3 from '../../assets/step3.png'
import image4 from '../../assets/step4.png'

const Steps = () => {
  return (
    <div className="p-8 lg:px-8 lg:py-20 bg-orange-2">
        <h2 className="px-4 text-2xl sm:text-4xl font-bold text-gray-800 text-center sm:mb-20">Bagaimana Chicken Counter bekerja?</h2>
        <div className="items-center lg:items-start flex flex-col lg:flex-row bg-orange-2 py-4 md:px-40 lg:justify-start">
            <StepsItem 
                imageItem={image1}
                textTitle={"Pasang ESP32-CAM"}
                textBody={"ESP32-CAM diletakkan di beberapa sudut kandang ayam"}
                style={{ flex: 1 }}/>
            <StepsItem 
                imageItem={image2}
                textTitle={"Mengambil gambar ayam"}
                textBody={"Kamera ESP32-CAM akan mengambil gambar-gambar ayam di kandang"}
                style={{ flex: 1 }}/>
            <StepsItem 
                imageItem={image3}
                textTitle={"Gambar diproses di cloud"}
                textBody={"Gambar  dari ESP32-CAM akan diolah menggunakan algoritma Machine Learning"}
                style={{ flex: 1 }}/>
            <StepsItem
                imageItem={image4}
                textTitle={"Hasil tampil pada dashboard"}
                textBody={"Hasil perhitungan ayam menggunakan ML akan ditampilkan di dashboard peternak"}
                style={{ flex: 1 }}/>
        </div>
    </div>
    
  )
}

export default Steps