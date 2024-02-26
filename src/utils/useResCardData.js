import { useState, useEffect } from "react";
import {RES_CARD_DATA} from "./constant"

const useResCardData = (resId) => {
    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(RES_CARD_DATA + resId);
        const json = await data.json();

        setResInfo(json?.data);
    };

    return resInfo;
}

export default useResCardData;