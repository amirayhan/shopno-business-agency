import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PartnerItem from "./PartnerItem/PartnerItem";

const Partner = () => {
    const [partnerItems, setPartnerItems] = useState([]);
    // const [testimonials, setTestimonials] = useState([]);
    // useEffect(() => {
    //     fetch("testimonials.json")
    //         .then((res) => res.json())
    //         .then((data) => setTestimonials(data));
    // }, []);
    useEffect(() => {
        fetch("partner.json")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div className="partner w-full py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-4 gap-5">
                {partnerItems.map((item) => (
                    <PartnerItem key={item.id} item={item}></PartnerItem>
                ))}
            </div>
        </div>
    );
};

export default Partner;
