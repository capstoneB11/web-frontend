import React from 'react'
import StepsItem from './StepsItem'
import image1 from '../../assets/step1.png'
import image2 from '../../assets/step2.png'
import image3 from '../../assets/step3.png'
import image4 from '../../assets/step4.png'

const Steps = () => {
  return (
    <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Bagaimana Chicken Counter bekerja?</h2>
        <div className="flex flex-col lg:flex-row justify-between">
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
                textTitle={"Hasil muncul di dashboard web"}
                textBody={"Hasil perhitungan ayam menggunakan ML akan ditampilkan di dashboard peternak"}
                style={{ flex: 1 }}/>
        </div>
    </div>
    
  )
}

export default Steps