import { useState, useEffect } from "react";
import {RES_DATA_URL} from "../utils/constant";

import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

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

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-text"
                        value={searchText}
                        onChange={(e) =>setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={searchItem}>Search</button>
                </div>
                <button className="top-res-btn" onClick={topCards}>Top Rated Restaurants</button>
            </div>
            {allCard.length === 0 ? 
            (<Shimmer />)
            :
            (<div className="res-container">
                {copyAllCard.map((resData)=> (
                    <ResCard key={resData?.info?.id} resData={resData} />
                ))}
            </div>)}
        </div>
    );
};

export default Body;