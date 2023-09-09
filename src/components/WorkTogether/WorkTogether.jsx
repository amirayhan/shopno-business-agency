import React from "react";

const WorkTogether = () => {
    return (
        <div className="w-full bg-[#e9e9e9] py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600] m-auto grid md:grid-cols-2 items-center">
                <div className="col-span-1">
                    <h3>Let's discuss how can we help make your Business better</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </div>
                <div className="col-span-1">
                    <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 float-right">Let's Work Together</button>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;
