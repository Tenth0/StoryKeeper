import React, { useEffect } from "react";
import NavigationBar from "@/components/navigation_bar";
import HomeBody from "@/components/Home/home_body";
import HomeFooter from "@/components/Home/home_footer";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";

const Index: React.FC<{}> = ({ items, categories }: any) => {
    // 型
    const setItems = useSetRecoilState(itemsState);
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setItems(items);
        setCategories(categories);
    }, [items,categories]);
    const categoryList = useRecoilValue(categoriesState);
    console.log(categoryList);
    return (
        <>
            <NavigationBar />
            <HomeBody />
            <HomeFooter />
        </>
    );
};

export default Index;
