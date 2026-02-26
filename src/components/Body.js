import RestaurantCard from "./RestaurantCard";
import{use, useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI"

const Body=()=>{
    const [restaurants, setRestaurants] =useState([]);
    const [ searchText, setSearchText]=useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    
    const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restaurantList || []);
    setFilteredRestaurants(restaurantList || []);
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
  <RestaurantCard
    key={restaurant.info.id}
    resData={restaurant.info}
  />
))}

    </div>
    </div>

    )
};


export default Body
