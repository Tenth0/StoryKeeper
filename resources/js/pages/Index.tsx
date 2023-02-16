import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import { Category, CardData } from "../types";
import NavigationBar from "@/components/NavigationBar";
import InsertItem from "@/pages/InsertItem";
import CategoryTable from "@/pages/CategoryTable";
import Items from "@/pages/Items";
import styled from "styled-components";

const Index: React.FC<{ items: CardData[]; categories: Category[]; }> = ({
    items,
    categories,
}) => {
    // URLを読み込んだ場合
    const location = useLocation();
    const setItems = useSetRecoilState(itemsState);
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setItems(items);
        setCategories(categories);
    }, [items, categories]);
    return (
        <>
            <FontRoboto>
                <AnimatePresence>
                    <NavigationBar />
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Items />} />
                        <Route path="/insert_item" element={<InsertItem />} />
                        <Route path="/category_table" element={<CategoryTable />} />
                    </Routes>
                </AnimatePresence>
            </FontRoboto>
        </>
    );
};

const FontRoboto = styled.div`
    font-family: "Roboto";
`;

export default Index;
