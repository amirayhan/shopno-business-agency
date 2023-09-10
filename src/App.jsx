import React from "react";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partner from "./components/Partner/Partner";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import WorkTogether from "./components/WorkTogether/WorkTogether";

const App = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Features></Features>
            <About></About>
            <Counter></Counter>
            <Testimonial></Testimonial>
            <WorkTogether></WorkTogether>
            <Portfolio></Portfolio>
            <Partner></Partner>
        </div>
    );
};

export default App;
