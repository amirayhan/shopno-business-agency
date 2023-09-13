import { faCircleCheck, faFileShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
    return (
        <div className="about w-full bg-[#F7F9FA] py-32" id="about">
            <div className="md:max-w-[1480px] max-w-[600] m-auto grid md:grid-cols-2">
                <div className="image m-auto">
                    <img src={about} alt="about image" />
                </div>
                <div className="about_content sm:mt-10">
                    <h3 className="text-[#ff6809]">About Us</h3>
                    <h2 className="leading-[60px] sm:text-5xl xs:text-3xl">Creating a Lifelong Learning Best Community</h2>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent</p>
                    <div className="experience border p-7">
                        <ul className="grid grid-cols-2 g-4">
                            <li className="mb-3">
                                <span className="text-[#ff6809] mr-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Strategy & Consulting
                            </li>
                            <li className="mb-3">
                                <span className="text-[#ff6809] mr-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Marketing Rules
                            </li>
                            <li className="mb-3">
                                <span className="text-[#ff6809] mr-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Business Process
                            </li>
                            <li className="mb-3">
                                <span className="text-[#ff6809] mr-2">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Partnerships
                            </li>
                        </ul>
                        <h4 className="p-4 bg-gray-200 text-center mt-4">
                            <span className="text-[#ff6809] mr-2">
                                <FontAwesomeIcon icon={faFileShield} />
                            </span>
                            10 Years of Consulting Experience
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
