import React, { useEffect } from "react";
import InsertItemBody from "@/components/Item/InsertItemBody";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";
import { Category } from '../types';
import NavigationBar from "@/components/NavigationBar";

const InsertItem: React.FC<{}> = ({ categories }:any) => {  
    if(categories) {
        const setCategories = useSetRecoilState(categoriesState);
        useEffect(() => {
          setCategories(categories)
        }, [categories])
        return (
          <>
            <NavigationBar />
            <InsertItemBody />
          </>
        )
    }
    return (
        <>
            <InsertItemBody />
        </>
    );
};

export default InsertItem;
