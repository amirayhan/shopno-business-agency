import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch("testimonials.json")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="w-full bg-white py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-3 grid-cols-1">
                <div className="testimonial_items md:col-span-2 md:mx-11">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <TestimonialItem key={testimonial.id} testimonial={testimonial}></TestimonialItem>
                        ))}
                    </Slider>
                </div>

                <div className="md:col-span-1 sm:order-first">
                    <h4 className="text-[#ff6809]">TESTIMONIALS</h4>
                    <h2 className="leading-[55px]">What Our Client's Says About Our Best Work.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi voluptatibus? Voluptate, recusandae beatae suscipit nostrum nisi sequi molestiae nemo, nobis sapiente unde eaque officia?</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

// https://www.npmjs.com/package/react-slick
