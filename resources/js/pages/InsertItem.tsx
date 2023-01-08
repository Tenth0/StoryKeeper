import React, { useEffect } from "react";
import InsertItemBody from "@/components/Item/InsertItemBody";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";
import { Category } from '../types';
import NavigationBar from "@/components/NavigationBar";

const InsertItem: React.FC<{}> = ({ categories }:any) => {  
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
