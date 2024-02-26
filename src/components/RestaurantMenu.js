import { useParams } from "react-router-dom";
import { useState } from "react";
import useResCardData from "../utils/useResCardData";
import MenuType from "./MenuType";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [open, setOpen] = useState(0);

    //Custom Hooks - helps to optimise the component and increase the reusability
    const resInfo = useResCardData(resId);

    if(resInfo === null) {
        return (
            <div className="loading">
                <div className="shimmer-header mt-[5px]"></div>
                <div className="shimmer-body w-[50%] mx-auto my-[20px]"></div>
            </div>
        )
    }

    const index = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).length-1;
    const {name, completeAddress} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[index]?.card?.card;

    const types = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((type) => type?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div>
            <div className="border font-bold m-[5px] p-[5px] text-center">
                <div className="text-2xl">{name}</div>
                <div className="text-base">{completeAddress}</div><br></br>
            </div>
            {/* MenuType - Controlled component -> when we can handle component -> here setOpen handle by MenuType*/}
            {types.map((type, index) => <MenuType key={type?.card?.card?.title} itemData={type?.card?.card} show={index === open ? true : false} setOpen={() => setOpen(index)} />)}
        </div>
    )
};

export default RestaurantMenu;