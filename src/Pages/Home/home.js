import React from "react";
import HeroImage from "../../Components/Hero-Image/hero_image";
import BasicSection from "../../Containers/Basic_Section/basic-section";

const Home = () => {

    return <>
        <HeroImage 
            title="~ Have a cup of coffee ~"
            subHead="~ Make a cup for coffee ~" 
            url="/assets/hero-images/Brown_Vase_Throwing_Wheel.webp"
            alt="Using cruved a wodden tool. Pair of clay covered hands gently carve a terricotta clay vase on a throwing wheel."
        />
        <BasicSection page='home' section='intro'/>
        <BasicSection page='home' section='day-classes'/>
        <BasicSection page='home' section='night-classes'/>
    </>
}

export default Home