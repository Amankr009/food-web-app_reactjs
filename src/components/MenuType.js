import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuType = ({itemData, show, setOpen}) => {
    const [close, setClose] = useState(true);
    const expand = () => {
        setOpen();
        setClose(!close);
    };
    
    return (
        <div className="w-6/12 mx-auto my-[5px] bg-gray-100">
            <div className="flex justify-between border-b-4 p-4 text-xl cursor-pointer" onClick={expand}>
                <span className="font-bold">{itemData?.title} ({itemData?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {show && close && itemData?.itemCards.map((item) => <MenuItems key={item?.card?.info?.id} menuData={item?.card?.info} />)}
        </div>
    )
}

export default MenuType;