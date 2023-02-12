import React from "react";
import HomeBody from "@/components/Home/HomeBody";
import AnimationTransition from "../Utils";

const Items: React.FC = () => {
    return (
        <>
            <AnimationTransition>
                <HomeBody />
            </AnimationTransition>
        </>
    );
};

export default Items;
