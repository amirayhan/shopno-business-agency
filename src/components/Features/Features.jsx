import { faChartLine, faHandshake, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

const Features = () => {
    return (
        <div className="w-full bg-white py-28">
            <div className="md:max-w-[1480px] max-w-[600px] m-auto grid grid-cols-3 gap-5 items-center">
                <div className="features_heading">
                    <h4 className="text-4xl text-[#ff6809]">Features</h4>
                    <h2 className=" sm:text-5xl leading-[60px]">We Are The Best Agency To Improve Your Deals.</h2>
                </div>
                <div className="feature_items col-span-2">
                    <FeatureItem icon={<FontAwesomeIcon icon={faHandshake} />} title={"business Advice"}></FeatureItem>
                    <FeatureItem icon={<FontAwesomeIcon icon={faChartLine} />} title={"Financial Advice"}></FeatureItem>
                    <FeatureItem icon={<FontAwesomeIcon icon={faTimeline} />} title={"Risk Management"}></FeatureItem>
                </div>
            </div>
        </div>
    );
};

export default Features;
