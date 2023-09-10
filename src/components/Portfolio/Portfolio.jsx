import { AnimatePresence } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import PortfolioItems from "../PorfolioItems/PortfolioItems";

export const portfolioContext = createContext();
const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [filteredPortItems, setFilteredPortItems] = useState([]);
    const getPorftolioItems = async () => {
        const response = await fetch("../../../public/portfolio.json");
        const items = await response.json();
        setPortfolioItems(items);
        setFilteredPortItems(items);
    };
    useEffect(() => {
        getPorftolioItems();
    }, []);
    const value = {
        portfolioItems,
        filteredPortItems,
        setFilteredPortItems,
    };
    return (
        <div className="w-full py-28">
            <div className="section_heading text-center">
                <h3>RECENT WORK</h3>
                <h2>Our Portfolio</h2>
            </div>
            <portfolioContext.Provider value={value}>
                <div className="filter_cetagories ">
                    <ButtonFilter></ButtonFilter>
                </div>
                <div className="md:max-w-[1480px] max-w-[600] m-auto grid md:grid-cols-4 sm:grid-cols-3 gap-3 pt-4">
                    <AnimatePresence>
                        <PortfolioItems></PortfolioItems>
                    </AnimatePresence>
                </div>
            </portfolioContext.Provider>
        </div>
    );
};

export default Portfolio;
