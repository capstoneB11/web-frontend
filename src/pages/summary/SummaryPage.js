import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCoins,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import SummaryInputField from "../../components/dashboard/SummaryInputField";
import useUserToken from "../../hooks/useUserToken";
import Card from "../../components/dashboard/Card";
import { useChickenCount } from "../../hooks/useChickenCount";
import Spinner from "../../utils/Spinner";
import Tooltip from "../../utils/Tooltip";

const SummaryPage = ({ userToken }) => {
  let content;
  const [price, setPrice] = useState(0); // State for Price input
  const [weight, setWeight] = useState(0); // State for Weight input
  const [productionCost, setProductionCost] = useState(0); // State for Production Cost input
  const [chickenCountFromText, setChickenCountFromText] = useState(0); // State for Chicken Count input

  const [result, setResult] = useState(0);

  const { chickenCount, countLoading } = useChickenCount(userToken);

  // Function to get unique count for each part
  const getUniqueCountByPart = (part) => {
    const entry = chickenCount.find((entry) => entry.part === part);
    return entry ? entry.count : 0;
  };

  // Get unique counts for each part
  const uniqueCountPart01 = getUniqueCountByPart("01");
  const uniqueCountPart02 = getUniqueCountByPart("02");
  const uniqueCountPart03 = getUniqueCountByPart("03");
  const uniqueCountPart04 = getUniqueCountByPart("04");

  // Sum the unique counts
  const totalSum =
    uniqueCountPart01 +
    uniqueCountPart02 +
    uniqueCountPart03 +
    uniqueCountPart04;

  //Required Fodder
  const requiredFodder = totalSum * 0.08;
  const requiredCost = requiredFodder * 9800;

  const formattedCost = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(requiredCost);

  const generateRandomNumber = () => {
    handleChickenCountChange(totalSum.toString());
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
    setChickenCountFromText(value); // Update the state for Chicken Count input
  };

  // Your onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    // Perform calculations or other actions using the state variables: price, weight, productionCost, chickenCount

    const totalResult =
      +price * +weight * +chickenCountFromText - +productionCost;

    const formattedResult = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(totalResult);

    setResult(formattedResult);
  };

  if (countLoading) {
    content = <Spinner />;
  } else {
    content = (
      <div className="p-6 sm:px-10 sm:py-4">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          Kalkulasi & Estimasi
        </h1>
        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
            <Card className="p-4 flex flex-col items-center justify-center h-full">
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
                  <p className="text-2xl font-bold text-orange-4">
                    {requiredFodder} kg
                  </p>
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
                  <p className="text-2xl font-bold text-orange-4">
                    {formattedCost}
                  </p>
                  <p>Harga Pakan</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <Card className="p-4 flex flex-col items-center justify-center h-full p-6 sm:py-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Estimasi Hasil Panen
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
                    value={chickenCountFromText}
                    handleInputChange={handleChickenCountChange}
                  />

                  <p>Atau</p>

                  <button
                    className="bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3"
                    type="button"
                    onClick={generateRandomNumber}
                  >
                    Gunakan Hasil Prediksi Terbaru
                  </button>
                </div>

                <button
                  className="w-full bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3"
                  type="submit"
                >
                  Hitung
                </button>
              </form>

              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center mt-4 mx-4">
                  <p className="text-black">Estimasi Hasil Panen</p>
                  <p className="text-2xl font-bold text-orange-4">{result}</p>
                </div>
                <Tooltip text="(Harga Ayam x Rata-Rata Bobot x Jumlah ayam) - Biaya Produksi">
                  <FontAwesomeIcon
                    className="mr-4"
                    icon={faInfoCircle}
                    color="black"
                  />
                </Tooltip>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default SummaryPage;
