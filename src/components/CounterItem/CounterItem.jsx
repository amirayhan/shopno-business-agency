import React from "react";
import CountUp from "react-countup";

const CounterItem = ({ total, title }) => {
    return (
        <div className="counter_item text-center py-10 rounded-md">
            <h2 className="text-[#ff6809] text-7xl">
                <CountUp end={total} redraw={true} enableScrollSpy />+
            </h2>
            <h4 className="text-white text-4xl">{title}</h4>
        </div>
    );
};

export default CounterItem;
