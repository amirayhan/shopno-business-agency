import { motion } from "framer-motion";
import React, { useContext } from "react";
import { portfolioContext } from "../Portfolio/Portfolio";

const PortfolioItems = () => {
    const { filteredPortItems } = useContext(portfolioContext);

    return filteredPortItems.map((item) => (
        <motion.div className="port_item" key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <img src={item.img} alt={item.category} />
            <h5>{item.title}</h5>
        </motion.div>
    ));
};

export default PortfolioItems;
