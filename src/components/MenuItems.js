import {CDN_URL} from "../utils/constant";

const MenuItems = ({menuData}) => {
    return (
        <div className="border-b-2 flex justify-between p-4 h-auto">
            <div className="w-9/12">
                <div className="text-xl font-semibold pb-2">{menuData?.name} - ₹{(menuData?.price || menuData?.defaultPrice)/100}</div>
                <div>{menuData?.isVeg === 1 ? "🟢Veg" : "🟤Non-Veg"}</div>
                <div>{menuData?.description}</div>
            </div>
            <div className="w-3/12 relative">
                <img src={CDN_URL+menuData?.imageId}/>
                <div className="bg-gray-500 text-white h-auto w-14 rounded px-1 absolute top-[-10px] left-12 cursor-pointer">Add +</div>
            </div>
        </div>
    )
}

export default MenuItems;