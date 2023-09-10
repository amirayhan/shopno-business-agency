import React, { useContext, useState } from "react";
import { filterCategory } from "../../../public/filterCategory";
import { portfolioContext } from "../Portfolio/Portfolio";

const ButtonFilter = () => {
    const [tabActive, setTabActive] = useState(0);
    const { portfolioItems, setFilteredPortItems } = useContext(portfolioContext);
    const handleClickFilter = (id) => {
        setTabActive(id);
        const filteredItems = portfolioItems.filter((item) => item.category_id === id);
        if (id === 0) {
            setFilteredPortItems(portfolioItems);
        } else {
            setFilteredPortItems(filteredItems);
        }
    };
    return (
        <div className="flex justify-center flex-wrap gap-5">
            {filterCategory.map((item) => (
                <button className={tabActive === item.id ? "active" : undefined} onClick={() => handleClickFilter(item.id)} key={item.id}>
                    {item.category}
                </button>
            ))}
        </div>
    );
};

export default ButtonFilter;
