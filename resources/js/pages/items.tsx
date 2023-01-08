import React, { useEffect } from "react";
import HomeBody from "@/components/Home/HomeBody";
import HomeFooter from "@/components/Home/HomeFooter";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import NavigationBar from "@/components/NavigationBar";

const Items: React.FC<{}> = ({ items, categories }: any) => {
    // 型
    const setItems = useSetRecoilState(itemsState);
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setItems(items);
        setCategories(categories);
    }, [items, categories]);
    return (
        <>
            <NavigationBar />
            <HomeBody />
            <HomeFooter />
        </>
    );
};

export default Items;
