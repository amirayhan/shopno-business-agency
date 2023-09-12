import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-[#222] py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600px] grid md:grid-cols-4 gap-10">
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
            </div>
        </div>
    );
};

export default Footer;
