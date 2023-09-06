import React from "react";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Features></Features>
            <About></About>
        </div>
    );
};

export default App;
