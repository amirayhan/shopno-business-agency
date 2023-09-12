import { motion } from "framer-motion";
import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { portfolioContext } from "../Portfolio/Portfolio";

const PortfolioItems = () => {
    const { filteredPortItems } = useContext(portfolioContext);

    return (
        <PhotoProvider>
            {filteredPortItems.map((item) => (
                <PhotoView key={item.id} src={item.img}>
                    <motion.div className="port_item" key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                        <img src={item.img} alt={item.category} />
                        <h5>{item.title}</h5>
                    </motion.div>
                </PhotoView>
            ))}
        </PhotoProvider>
    );
};

export default PortfolioItems;

// https://www.npmjs.com/package/react-photo-view
