import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import{useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [restaurants, setRestaurants] =useState([]);
    const [ searchText, setSearchText]=useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
}, []);

const onlineStatus = useOnlineStatus();

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard); //promoted card

if (onlineStatus === false) {
  return <h1>Offline, check your internet connection!!</h1>;
}


//swiggys real api data

// const fetchData = async () => {
//     const data = await fetch(
//         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);

//     const unique = [
//         ...new Map(
//             [
//                 ...(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []),
//                 ...(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
//             ].map((res) => [res.info.id, res])
//         ).values()
//     ];

//     setRestaurants(unique);
//     setFilteredRestaurants(unique);
// };


//namaste reacts api

const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(json);

    const restaurants =
        json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log("restaurants found:", restaurants.length);

    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
};

if(restaurants.length===0){
    return <ShimmerUI />};


    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
      
          {/* Search + Filter Row */}
          <div className="flex items-center mb-6">
      
            {/* Search Section */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
      
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={() => {
                  const searchList = restaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(searchList);
                }}
              >
                Search
              </button>
            </div>
      
            {/* Filter Button */}
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-200 transition ml-auto"
              onClick={() => {
                const filteredList = restaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Filter Top Rated Restaurants
            </button>
      
          </div>
      
          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
                className="block"
              >
                    
                {restaurant.info.promoted ? (   //promoted card
                  <PromotedRestaurantCard resData={restaurant.info} />
                ) : (
                  <RestaurantCard resData={restaurant.info} />
                )}
               
              </Link>
            ))}
          </div>
      
        </div>
      );
      
};


export default Body
