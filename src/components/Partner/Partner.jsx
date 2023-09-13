import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PartnerItem from "../PartnerItem/PartnerItem";

const Partner = () => {
    const [partnerItems, setPartnerItems] = useState([]);

    useEffect(() => {
        fetch("pertner.json")
            .then((res) => res.json())
            .then((data) => setPartnerItems(data));
    }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="partner w-full py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto">
                <Slider {...settings}>
                    {partnerItems.map((item) => (
                        <PartnerItem key={item.id} item={item}></PartnerItem>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Partner;
