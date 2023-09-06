import React from "react";
import CounterItem from "../CounterItem/CounterItem";

const Counter = () => {
    return (
        <div className="w-full counter">
            <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                <CounterItem total={97} title={"Projects"}></CounterItem>
                <CounterItem total={75} title={"Happy Clients"}></CounterItem>
                <CounterItem total={85} title={"Awards"}></CounterItem>
                <CounterItem total={80} title={"Cup of Tea"}></CounterItem>
            </div>
        </div>
    );
};

export default Counter;
