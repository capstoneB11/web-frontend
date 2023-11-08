import { useState, useEffect } from "react";

export function useChickenCount(userToken) {
  const [chickenCount, setChickenCount] = useState([]);

  useEffect(() => {
    const URL = `https://www.chickcount.tech/api/getCount?uname=${userToken}`;

    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.data) {
          // Extract 'count' values and store them in an array
          const countsArray = responseData.data.map((item) => item.count);
          setChickenCount(countsArray);
        } else {
          console.error('No "data" property in the JSON response');
        }
      })
      .catch((error) => console.error("Error fetching count:", error));
  }, [userToken]);

  return chickenCount;
}
