import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
    return (
        <div className="flex text-orange-600">
            {[...Array(rating)].map(() => (
                <FontAwesomeIcon icon={faStar} />
            ))}
            {[...Array(5 - rating)].map(() => (
                <FontAwesomeIcon icon={faStarHalfStroke} />
            ))}
        </div>
    );
};

export default Rating;
