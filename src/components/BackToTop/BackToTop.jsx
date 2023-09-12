import React from "react";
import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
    const [fix, setfix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 400) {
            setfix(true);
        } else {
            setfix(false);
        }
    };
    window.addEventListener("scroll", setFixed);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <button onClick={() => handleBackToTop()} className={`${fix ? "back2top fixed" : "back2top"} px-5 py-4 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300`}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default BackToTop;
