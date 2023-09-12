import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Counter from "./components/Counter/Counter";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
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
            <Blog></Blog>
            <Contact></Contact>
            <Partner></Partner>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </div>
    );
};

export default App;
