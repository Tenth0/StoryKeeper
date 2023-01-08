import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import Items from "@/pages/Items";
import InsertItem from "@/pages/InsertItem";
import CategoryTable from "@/pages/CategoryTable";

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
            <Routes>
                <Route path="/" element={<Items />} />
                <Route
                    path="/insert_item"
                    element={<InsertItem categories={categories} />}
                />
                <Route path="/category_table" element={<CategoryTable />} />
            </Routes>
        </>
    );
};

export default Index;
