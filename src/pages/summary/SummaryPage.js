import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCoins } from "@fortawesome/free-solid-svg-icons";
import SummaryInputField from "../../components/dashboard/SummaryInputField";
import useUserToken from "../../hooks/useUserToken";

const SummaryPage = () => {
  const [price, setPrice] = useState(0); // State for Price input
  const [weight, setWeight] = useState(0); // State for Weight input
  const [productionCost, setProductionCost] = useState(0); // State for Production Cost input
  const [chickenCount, setChickenCount] = useState(0); // State for Chicken Count input

  const [result, setResult] = useState(0);

  const userToken = useUserToken();

  const generateRandomNumber = () => {
    const randomCount = Math.floor(Math.random() * 100); // Generates a random number between 0 and 100 (change as needed)
    handleChickenCountChange(randomCount.toString());
  };

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

    const totalResult = +price + +weight + +productionCost + +chickenCount;
    setResult(totalResult);
  };

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold">Summary</h1>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Estimasi Pakan Ayam
            </h2>
            <h1 className="text-xl">Diperlukan</h1>
            <div className="flex flex-row mt-4 items-center">
              <FontAwesomeIcon
                className="mr-4"
                icon={faShoppingCart}
                size="2x"
                color="black"
              />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-orange-4">570kg</p>
                <p>Pakan Ayam</p>
              </div>
            </div>

            <div className="flex flex-row mt-4 items-center">
              <FontAwesomeIcon
                className="mr-4"
                icon={faCoins}
                size="2x"
                color="black"
              />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-orange-4">Rp 400.000</p>
                <p>Harga Pakan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Estimasi Hasil Panel
            </h2>
            <form className="w-full" onSubmit={(e) => onSubmit(e)}>
              <SummaryInputField
                label="Harga Ayam per Kg (Rupiah)"
                type="number"
                id="price"
                name="price"
                placeholder="Masukkan Harga Ayam per Kg"
                value={price}
                handleInputChange={handlePriceChange}
              />

              <SummaryInputField
                label="Rata-rata Bobot Ayam (Kg)"
                type="number"
                id="weight"
                name="weight"
                placeholder="Masukkan Rata-rata Bobot Ayam (Kg)"
                value={weight}
                handleInputChange={handleWeightChange}
              />

              <SummaryInputField
                label="Total Biaya Produksi (Rupiah)"
                type="number"
                id="productionCost"
                name="productionCost"
                placeholder="Masukkan Total Biaya Produksi"
                value={productionCost}
                handleInputChange={handleProductionCostChange}
              />

              <div className="flex flex-col lg:flex-row items-center justify-between mb-4 lg:mb-0">
                <SummaryInputField
                  label="Jumlah Ayam (Ekor)"
                  type="number"
                  id="chickenCount"
                  name="chickenCount"
                  placeholder="Masukkan Jumlah Ayam (Ekor)"
                  value={chickenCount}
                  handleInputChange={handleChickenCountChange}
                />

                <p>Atau</p>

                <button
                  className="bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3"
                  type="button"
                  onClick={generateRandomNumber}
                >
                  Gunakan Hasil Prediksi
                </button>
              </div>

              <button
                className="w-full bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3"
                type="submit"
              >
                Hitung
              </button>
            </form>

            <h1>Total : {result}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
