import { AnimatePresence } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import PortfolioItems from "../PorfolioItems/PortfolioItems";

export const portfolioContext = createContext();
const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [filteredPortItems, setFilteredPortItems] = useState([]);

    const getPorftolioItems = async () => {
        const response = await fetch("portfolio.json");
        const items = await response.json();
        console.log(items);
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
        <div className="w-full py-32" id="portfolio">
            <div className="section_heading text-center">
                <h4 className="text-[#ff6809]">RECENT WORK</h4>
                <h2 className="pb-5">Our Portfolio</h2>
            </div>
            <portfolioContext.Provider value={value}>
                <div className="filter_cetagories my-5">
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
