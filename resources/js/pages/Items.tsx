import React from "react";
import HomeBody from "@/components/Home/HomeBody";
import HomeFooter from "@/components/Home/HomeFooter";
import AnimationTransition from "../Utils";

const Items: React.FC = () => {
    return (
        <>
            <AnimationTransition>
                <HomeBody />
                <HomeFooter />
            </AnimationTransition>
        </>
    );
};

export default Items;
