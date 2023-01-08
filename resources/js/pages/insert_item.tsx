import React, { useEffect } from "react";
import InsertItemBody from "@/components/Item/insert_item_body";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";
import { Category } from '../types';

const InsertItem: React.FC<{}> = ({ categories }:any) => {  
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setCategories(categories);
    }, [categories]);
    return (
        <>
            <InsertItemBody />
        </>
    );
};

export default InsertItem;
