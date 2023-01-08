import React, { useEffect } from "react";
import HomeBody from "@/components/Home/HomeBody";
import HomeFooter from "@/components/Home/HomeFooter";
import NavigationBar from "@/components/NavigationBar";

const Items: React.FC<{}> = () => {
    return (
        <>
            <NavigationBar />
            <HomeBody />
            <HomeFooter />
        </>
    );
};

export default Items;
