import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
    const setItems = useSetRecoilState(itemsState);
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setItems(items);
        setCategories(categories);
    }, [items, categories]);
    return (
        <>
            <FontRoboto>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Items />} />
                    <Route path="/insert_item" element={<InsertItem />} />
                    <Route path="/category_table" element={<CategoryTable />} />
                </Routes>
            </FontRoboto>
        </>
    );
};

export default Index;
