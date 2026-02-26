import {CDN_URL, CDN_FALLBACK} from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { 
      cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating, 
      sla,        
      costForTwo  
  } = resData;

  return (
    <div className="res-card">
        <img 
            className="card-img" 
            src={CDN_URL + cloudinaryImageId} 
            alt={name} 
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐ {sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
    </div>
);
};

export default RestaurantCard;