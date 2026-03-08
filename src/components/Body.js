import RestaurantCard from "./RestaurantCard";
import{useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom";

const Body=()=>{
    const [restaurants, setRestaurants] =useState([]);
    const [ searchText, setSearchText]=useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
}, []);

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
    <div  className="body">

<div id="search-container">
            <input type="text" placeholder="Search" id="search-input" value={searchText}
            onChange={(e) => {
                    setSearchText(e.target.value);
                }   
            }/>
            <button id="search-btn" 
          onClick={() => {
            const searchList = restaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchList);
        }}
        
            >Search</button>
        </div>


        <div className="filter">
            <button id="filter-btn" onClick={() => {
                const filteredList=restaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);

            }}>Filter Top Rated Restaurants</button>
        </div>

       

    

    <div className="res-container">
    {filteredRestaurants.map((restaurant) => (
  <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} style={{ textDecoration: "none", color: "inherit" }}>
    <RestaurantCard resData={restaurant.info} />
  </Link>
))}

    </div>
    </div>

    )
};


export default Body
