import {CDN_URL} from "../utils/constant";

const ResCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = props?.resData?.info;
    return (
        <div className="res-card">
            <img alt="res-logo"
                className="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="text-wrap">{name}</h3>
            <h4>{avgRating+" Stars. "+ sla.slaString}</h4>
            <h4 className="text-wrap">{cuisines.join(", ")}</h4>
        </div>
    );
};

export default ResCard;