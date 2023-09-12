import React from "react";

const PartnerItem = ({ item }) => {
    return (
        <div className="text-center m-auto">
            <img src={item.img} alt="partner logo" />
        </div>
    );
};

export default PartnerItem;
