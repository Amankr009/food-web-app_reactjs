import ResCard from "./ResCard";
import resDataList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [allCard, filterCards] = useState(resDataList);

    const topCards = () => {
        const topCardList =  allCard.filter(
            (res) => res?.info?.avgRating >= 4.5
        );
        filterCards(topCardList);
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">Search</div>
                <button className="top-res-btn" onClick={topCards}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {allCard.map((resData)=> (
                    <ResCard key={resData?.info?.id} resData={resData} />
                ))}
            </div>
        </div>
    );
};

export default Body;