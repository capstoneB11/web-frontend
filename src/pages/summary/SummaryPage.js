import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCoins } from '@fortawesome/free-solid-svg-icons';

const SummaryPage = () => {

  const [price, setPrice] = useState(0); // State for Price input
  const [weight, setWeight] = useState(0); // State for Weight input
  const [productionCost, setProductionCost] = useState(0); // State for Production Cost input
  const [chickenCount, setChickenCount] = useState(0); // State for Chicken Count input

  // Functions to handle input changes
  const handlePriceChange = (value) => {
    setPrice(value); // Update the state for Price input
  };

  const handleWeightChange = (value) => {
    setWeight(value); // Update the state for Weight input
  };

  const handleProductionCostChange = (value) => {
    setProductionCost(value); // Update the state for Production Cost input
  };

  const handleChickenCountChange = (value) => {
    setChickenCount(value); // Update the state for Chicken Count input
  };

  // Your onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    // Perform calculations or other actions using the state variables: price, weight, productionCost, chickenCount
  };


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
            <form onSubmit={(e) => onSubmit(e, price, weight, productionCost, chickenCount)}>
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  required
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  onChange={(e) => handlePriceChange(e.target.value)}
                />
                <div id="price-validation-msg" className="text-red-600"></div>
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-gray-600">
                  Weight
                </label>
                <input
                  required
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="Enter weight"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  onChange={(e) => handleWeightChange(e.target.value)}
                />
                <div id="weight-validation-msg" className="text-red-600"></div>
              </div>
              <div className="mb-4">
                <label htmlFor="productionCost" className="block text-gray-600">
                  Production Cost
                </label>
                <input
                  required
                  type="number"
                  id="productionCost"
                  name="productionCost"
                  placeholder="Enter production cost"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  onChange={(e) => handleProductionCostChange(e.target.value)}
                />
                <div id="productionCost-validation-msg" className="text-red-600"></div>
              </div>
              <div className="mb-6">
                <label htmlFor="chickenCount" className="block text-gray-600">
                  Chicken Count
                </label>
                <input
                  required
                  type="number"
                  id="chickenCount"
                  name="chickenCount"
                  placeholder="Enter chicken count"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  onChange={(e) => handleChickenCountChange(e.target.value)}
                />
                <div id="chickenCount-validation-msg" className="text-red-600"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage