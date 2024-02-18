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
            <div className="border font-bold m-[5px] p-[5px]">
                <div className="text-2xl">{name}</div>
                <div className="text-base">{completeAddress}</div><br></br>
            </div>
            <div className=" flex text-xl font-mono m-[5px] w-[50%] justify-center">Recommended</div>
            <ul>
                {itemCards.map((dish) => (
                    <li className="border w-[50%] hover:bg-gray-100 active:bg-gray-300 cursor-pointer m-[5px]" key={dish?.card?.info?.id}><li>{dish?.card?.info?.name} - Rs. {(dish?.card?.info?.defaultPrice || dish?.card?.info?.price)/100}</li>{dish?.card?.info?.isVeg === 1 ? "Veg" : "Non-Veg"} - {dish?.card?.info?.ratings?.aggregatedRating?.rating} Stars rated by {dish?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} Users</li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;