import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
    return (
        <div className="w-full bg-white py-28">
            <div className="md:max-w-[1480px] max-w-[600] m-auto grid grid-cols-2">
                <img src={about} alt="about image" />
                <div className="about_content">
                    <h3>About Us</h3>
                    <h2>Creating a Lifelong Learning Best Community</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti
                        sociosqu ad litora torquent
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
