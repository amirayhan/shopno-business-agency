import React from "react";
import h2_banner_img from "../../assets/h2_banner_img.png";

const Hero = () => {
    return (
        <div className="hero w-full pt-28">
            <div className="md:max-w-[1480px] max-w-[600px] m-auto grid grid-cols-2 items-center">
                <div className="hero_content ">
                    <span className="px-6 py-3 bg-blue-100 sm:text-1xl text-blue-600 font-bold rounded-full inline-block">WE ARE EXPERT IN THIS FIELD</span>
                    <h1 className="mt-5 sm:text-5xl md:text-7xl lg:text-8xl">We Help Grow Up Your Business</h1>
                    <p>Acquiring new clients is one of the biggest challenges many consultants face. You need to convince them that you are the right person to fix their problems.</p>
                    <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 mt-4">Our Services</button>
                </div>
                <div className="hero_img flex justify-center">
                    <img src={h2_banner_img} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
