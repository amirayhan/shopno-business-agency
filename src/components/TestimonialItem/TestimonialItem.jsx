import React from "react";
import Rating from "../Rating/Rating";

const TestimonialItem = ({ testimonial }) => {
    const { img, name, title, rating, feedback } = testimonial;
    return (
        <div className="testimonial_item border p-7 rounded-[30px] md:mx-5">
            <p className="text-1xl italic">"{feedback}"</p>
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
