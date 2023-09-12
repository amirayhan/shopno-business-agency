import React from "react";
import Rating from "../Rating/Rating";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialItem = ({ testimonial }) => {
    const { img, name, title, rating, feedback } = testimonial;
    return (
        <div className="testimonial_item border p-7 rounded-[15px] md:mx-5">
            <span className="text-7xl text-[#ff6809] mb-7 pl-5 block">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p className="text-2xl italic mb-6">"{feedback}"</p>
            <div className="client flex">
                <div className="img_name flex items-center mt-8">
                    <div className="image w-[80px] h-[80px] overflow-hidden rounded-full mr-3">
                        <img src={img} alt="person" />
                    </div>
                    <div className="name_title mt-1">
                        <h4 className="leading-[0]">{name}</h4>
                        <p className="py-2">{title}</p>
                        <Rating rating={rating}></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
