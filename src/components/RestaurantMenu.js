import { useParams } from "react-router-dom";
import useResCardData from "../utils/useResCardData";

const RestaurantMenu = () => {
    const {resId} = useParams();

    //Custom Hooks - helps to optimise the component and increase the reusability
    const resInfo = useResCardData(resId);

    if(resInfo === null) {
        return (
            <div className="loading">
                <div className="shimmer-header"></div>
                <div className="shimmer-body"></div>
            </div>
        )
    }

    const index = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).length-1;
    const {name, completeAddress} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[index]?.card?.card;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{completeAddress}</h4><br></br>
            <h3>Recommended</h3>
            <ul>
                {itemCards.map((dish) => (
                    <li key={dish?.card?.info?.id}><li>{dish?.card?.info?.name} - Rs. {(dish?.card?.info?.defaultPrice || dish?.card?.info?.price)/100}</li>{dish?.card?.info?.isVeg === 1 ? "Veg" : "Non-Veg"} - {dish?.card?.info?.ratings?.aggregatedRating?.rating} Stars rated by {dish?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} Users</li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;