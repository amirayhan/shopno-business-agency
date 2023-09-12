import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [fix, setfix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 140) {
            setfix(true);
        } else {
            setfix(false);
        }
    };

    window.addEventListener("scroll", setFixed);

    const handleToggleClick = () => setToggle(!toggle);
    return (
        <div className={`${fix ? "header fixed" : "header"} w-full h-[96px]`}>
            <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex items-center justify-between ">
                <a href="#" className="logo">
                    <h3 className="text-5xl">SHOPNO</h3>
                </a>
                <ul className="hidden md:flex gap-12 font-bold ">
                    <li>
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Support
                        </a>
                    </li>
                    <li>
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Platform
                        </a>
                    </li>
                    <li>
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Pricing
                        </a>
                    </li>
                </ul>

                <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 hidden md:block">Sign Up For Free</button>

                <button onClick={handleToggleClick} className="text-3xl text-[#222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300 md:hidden">
                    <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
                </button>
            </div>
            <div className={toggle ? "absolute z-10 w-full bg-white p-4" : "hidden"}>
                <ul className="text-center">
                    <li className="p-3 hover:bg-gray-100">
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Home
                        </a>
                    </li>
                    <li className="p-3 hover:bg-gray-100">
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            About
                        </a>
                    </li>
                    <li className="p-3 hover:bg-gray-100">
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Support
                        </a>
                    </li>
                    <li className="p-3 hover:bg-gray-100">
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Platform
                        </a>
                    </li>
                    <li className="p-3 hover:bg-gray-100">
                        <a className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300" href="#">
                            Pricing
                        </a>
                    </li>
                </ul>
                <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 w-full">Sign Up For Free</button>
            </div>
        </div>
    );
};

export default Header;

/*
Idea: https://kodesolution.com/html/2023/wency-html/
Youtube video: https://www.youtube.com/watch?v=UKAbQnCHy4M&ab_channel=CodeWithThilakS%7CCWTS
Theme Name: SHOPNO


  Fonts Name
==========================
  --title-font: "Teko", sans-serif;
  --text-font: "Manrope", sans-serif;

    font-family: 'Manrope', sans-serif;
    font-family: 'Teko', sans-serif;


  Fonts Size
==========================
  --h1-font-size: 118px;
  --h2-font-size: 60px;
  --h3-font-size: 36px;
  --h4-font-size: 24px;
  --h5-font-size: 22px;
  --h6-font-size: 20px;

  Fonts Weight
==========================
  --h1-font-weight: 400;
  --h2-font-weight: 400;
  --h3-font-weight: 400;
  --h4-font-weight: 400;
  --h5-font-weight: 400;
  --h6-font-weight: 400;

  Body Fonts Size & Weight
==========================
  --body-font-size: 16px;
  --body-font-weight: 400;

  Colors
==========================
  --theme-color1: #ff6809;
  --headings-color: #222222;
  --text-color: #717171;
*/
