import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [navItems, setNavItems] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch("header.json")
            .then((res) => res.json())
            .then((data) => setNavItems(data));
    }, []);

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
                <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} className="logo cursor-pointer">
                    <h3 className="text-5xl">SHOPNO</h3>
                </Link>
                <ul className="hidden md:flex gap-12 font-bold ">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link to={item.name} spy={true} smooth={true} offset={-30} duration={500} className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300 cursor-pointer capitalize">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 hidden md:block">Sign Up For Free</button>

                <button onClick={handleToggleClick} className="toggleIconBtn text-3xl text-[#222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300 md:hidden">
                    <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
                </button>
            </div>
            <div className={toggle ? "absolute z-10 w-full bg-white p-4" : "hidden"}>
                <ul className="small_menu text-center">
                    {navItems.map((item) => (
                        <li key={item.id} className="p-3 hover:bg-gray-100">
                            <Link to={item.name} spy={true} smooth={true} offset={-30} duration={500} className="text-[#222222] hover:text-[#ff6809] transition-all hover:ease-linear duration-300 capitalize">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 w-full">Sign Up For Free</button>
            </div>
        </div>
    );
};

export default Header;
