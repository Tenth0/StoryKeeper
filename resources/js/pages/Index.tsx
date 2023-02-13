import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import { Category, CardsData } from "../types";
import NavigationBar from "@/components/NavigationBar";
import InsertItem from "@/pages/InsertItem";
import CategoryTable from "@/pages/CategoryTable";
import Items from "@/pages/Items";
import styled from "styled-components";

const FontRoboto = styled.div`
    font-family: "Roboto";
`;

const Index: React.FC<{ items: CardsData; categories: Category[] }> = ({
    items,
    categories,
}) => {
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

export default Index;
