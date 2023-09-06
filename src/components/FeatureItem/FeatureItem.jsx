import React from "react";

const FeatureItem = ({ title, icon }) => {
    return (
        <div className="feature_item p-10 sm:p-5 bg-gray-100 rounded-[20px]">
            <span className="text-5xl sm:text-4xl text-[#ff6809]">{icon}</span>
            <h3 className="py-3 sm:text-3xl">{title}</h3>
            <p>We make the over insurance quoting purchasing.</p>
        </div>
    );
};

export default FeatureItem;
