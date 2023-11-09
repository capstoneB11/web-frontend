import { useState, useEffect } from "react";

export function useChickenCount(userToken) {
  const [chickenCount, setChickenCount] = useState([]);
  const [countLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const URL = `https://www.chickcount.tech/api/getCount?uname=${userToken}`;

    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.data) {
          // Create an array of objects with key-value pairs from timestampArray and countsArray
          const dataObjects = responseData.data.map((item) => ({
            timestamp: item.timestamp,
            count: item.count,
          }));

          setChickenCount(dataObjects);
        } else {
          console.error('No "data" property in the JSON response');
        }
      })
      .catch((error) => console.error("Error fetching count:", error))
      .finally(setLoading(false));
  }, [userToken]);

  return { chickenCount, countLoading };
}
