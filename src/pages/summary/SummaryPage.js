import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCoins } from '@fortawesome/free-solid-svg-icons';

const SummaryPage = ({userToken}) => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Summary</h1>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold">Estimasi Pakan Ayam</h2>
            <h1 className="text-xl">Diperlukan</h1>
            <div className="flex flex-row mt-4 items-center">
              <FontAwesomeIcon className='mr-4' icon={faShoppingCart} size="2x" color="black" />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">570kg</p>
                <p>Pakan Ayam</p>
              </div>
            </div>

            <div className="flex flex-row mt-4 items-center">
              <FontAwesomeIcon className='mr-4' icon={faCoins} size="2x" color="black" />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">Rp 400.000</p>
                <p>Harga Pakan</p>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold">Estimasi Hasil Panel</h2>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage