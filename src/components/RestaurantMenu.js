import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { CDN_FALLBACK } from "../utils/constants";

const MENU_TYPE = "type.googleapis.com/swiggy.presentation";

const styles = {
  menu: { maxWidth: "800px", margin: "0 auto", padding: "20px" },
  category: { margin: "20px 0" },
  item: { display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #eee" },
  name: { margin: "0 0 4px" },
  price: { fontWeight: "bold", margin: "4px 0" },
  desc: { fontSize: "0.85rem", color: "#666", margin: 0 },
  imgWrapper: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
  img: { width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" },
  btn: { border: "1px solid green", color: "green", background: "white", padding: "4px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" },
};

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`);
    const json = await data.json();
    console.log("full json:", json);
    console.log("json.data:", json?.data);
    console.log("cards:", json?.data?.cards);

    setResInfo(json.data);

    const cards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const categories = cards
      .map((x) => x?.card?.card)
      .filter((x) => x?.["@type"] === MENU_TYPE || x?.itemCards);

    setMenuCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) return <ShimmerUI />;

  const restaurantInfo =
  resInfo?.cards?.find((c) => c?.card?.card?.info?.name)?.card?.card?.info || {};

const { name, cuisines, costForTwoMessage, avgRatingString, sla } = restaurantInfo;

  return (
    <div style={styles.menu}>
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRatingString} · 🕐 {sla?.slaString} · {costForTwoMessage}</p>

      <hr />

      {menuCategories.map((category, index) => (
        <div key={index} style={styles.category}>
          <h3>{category?.title} ({category?.itemCards?.length})</h3>

          {category?.itemCards?.map((item) => {
            const { id, name, description, price, defaultPrice } = item?.card?.info;

            return (
              <div key={id} style={styles.item}>
                <div>
                  <h4 style={styles.name}>{name}</h4>
                  <p style={styles.price}>₹{((price || defaultPrice) / 100).toFixed(2)}</p>
                  <p style={styles.desc}>{description}</p>
                </div>
                <div style={styles.imgWrapper}>
                  <img style={styles.img} src={CDN_FALLBACK} alt={name} />
                  <button style={styles.btn}>ADD +</button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;