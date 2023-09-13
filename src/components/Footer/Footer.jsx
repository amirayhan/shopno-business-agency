import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-[#222] pt-20">
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-4 gap-60 pb-20">
                <div>
                    <h2 className="text-[#ff6809]">Shopno</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi ipsum, incidunt veniam deleniti voluptatibus culpa cupiditate, libero nihil quibusdam vel. Illum voluptatibus numquam hic.</p>
                </div>
                <div>
                    <h3 className="text-white">Link</h3>
                    <ul>
                        <li className="mt-5">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Home
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                About
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Support
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Platform
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white">Our Services</h3>
                    <ul>
                        <li className="mt-5">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Business
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Development
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Consulting
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                It Mangement
                            </a>
                        </li>
                        <li className="mt-4">
                            <a className="text-white hover:text-[#ff6809]" href="#">
                                Financial
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white">Get In Touch</h3>
                    <ul>
                        <li className="text-white hover:text-[#ff6809] mt-5">The USA — 785 15h Street, Office 478 Boston MA, 02116</li>
                        <li className="text-white hover:text-[#ff6809] mt-5">contact@gmail.com</li>
                        <li className="text-white hover:text-[#ff6809] mt-5">+1 700 666 25 69</li>
                        <li className="text-white hover:text-[#ff6809] mt-5">8:00 AM - 17:30 PM Mon - Friday</li>
                    </ul>
                </div>
            </div>
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto border-t border-gray-600 py-10">
                <p className="text-center text-white">
                    © 2023 consultiva, All Rights Reserved -{" "}
                    <a className="text-[#ff6809]" target="_blank" href="github.com/amirayhan/">
                        amiRayhan
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
