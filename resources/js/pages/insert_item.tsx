import React, { useEffect } from "react";
import NavigationBar from "@/components/navigation_bar";
import InsertItemBody from "@/components/Item/insert_item_body";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";

const InsertItem: React.FC = ({ categories }: any) => {
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setCategories(categories);
    }, [categories]);
    return (
        <>
            <NavigationBar />
            <InsertItemBody />
        </>
    );
};

export default InsertItem;
