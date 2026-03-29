// import {CDN_URL, CDN_FALLBACK} from "../utils/constants";


// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const { 
//       cloudinaryImageId, 
//       name, 
//       cuisines, 
//       avgRating, 
//       sla,        
//       costForTwo  
//   } = resData;

//   return (
//     <div className="res-card">
//         <img 
//             className="card-img" 
//             src={CDN_URL + cloudinaryImageId} 
//             alt={name} 
//         />
//         <h3>{name}</h3>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{avgRating} ⭐ {sla.deliveryTime} minutes</h4>
//         <h4>{costForTwo}</h4>
//     </div>
// );
// };

// export default RestaurantCard;









import { CDN_FALLBACK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info || resData;

  return (
    <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 shadow-lg bg-gray-50transition">
      <img
        className="card-img"
        src={CDN_FALLBACK}
        alt={name}
      />
      <h3 className="font-bold px-1 py-0.5">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRatingString ?? avgRating} ⭐ · {totalRatingsString}
      </h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>


    )
  }
}

export default RestaurantCard;
export { withPromotedLabel };