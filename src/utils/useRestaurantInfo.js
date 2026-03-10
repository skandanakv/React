import { useState, useEffect } from "react";

const useRestaurantInfo = (restaurantId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [restaurantId]);

  const fetchData = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
