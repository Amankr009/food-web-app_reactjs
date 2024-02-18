import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {RES_DATA_URL} from "../utils/constant";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [allCard, setfilterCards] = useState([]);

    // create a copy of above state, so it original data won't change on state update
    const [copyAllCard, setAllCards] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_DATA_URL);
        const jsonData = await data.json();

        //object call here is as per swiggy live API, incase break please configure with latest one
        setfilterCards(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setAllCards(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const topCards = () => {
        const topCardList =  allCard.filter(
            (res) => res?.info?.avgRating >= 4.5
        );
        setAllCards(topCardList);
    };

    const searchItem = () => {
        const searchItemList = allCard.filter(
            (res) => res?.info?.name.toLowerCase().includes(searchText)
        );
        setAllCards(searchItemList);
    }

    //Use of Custom hooks to get internet status
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h3>Something went wrong!! Please check you Internet Connectivity!!</h3>
        )
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-text border"
                        value={searchText}
                        onChange={(e) =>setSearchText(e.target.value)}
                    />
                    <button className="search-btn border bg-gray-100 w-24 active:bg-gray-300" onClick={searchItem}>Search</button>
                </div>
                <button className="top-res-btn bg-gray-100 w-48 border active:bg-gray-300" onClick={topCards}>Top Rated Restaurants</button>
            </div>
            {allCard.length === 0 ? 
            (<Shimmer />)
            :
            (copyAllCard.length === 0 ? 
                <div className="flex justify-center text-red-600 font-mono text-4xl">No Result Found!!</div>
            :
            (<div className="res-container">
                {copyAllCard.map((resData)=> (
                    <Link key={resData?.info?.id} to={"/restaurants/"+resData?.info?.id}>
                        <ResCard resData={resData} />
                    </Link>
                ))}
            </div>))}
        </div>
    );
};

export default Body;