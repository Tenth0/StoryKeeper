import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import Items from "@/pages/Items";
import InsertItem from "@/pages/InsertItem";
import CategoryTable from "@/pages/CategoryTable";
import NavigationBar from "@/components/NavigationBar";

const Index: React.FC<{}> = ({ items, categories }: any) => {
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
            <Routes>
                <Route 
                    path="/" 
                    element={<Items />} 
                />
                <Route
                    path="/insert_item"
                    element={<InsertItem />}
                />
                <Route 
                    path="/category_table" 
                    element={<CategoryTable />} 
                />
            </Routes>
        </>
    );
};

export default Index;
