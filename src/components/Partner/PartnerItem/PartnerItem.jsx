import React from "react";

const PartnerItem = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="partner logo" />
        </div>
    );
};

export default PartnerItem;
