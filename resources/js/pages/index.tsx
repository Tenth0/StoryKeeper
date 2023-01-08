import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "@/components/navigation_bar";
import Items from "@/pages/items";
import InsertItem from "@/pages/insert_item";
import CategoryTable from "@/pages/category_table";

const Index: React.FC<{}> = () => {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Items />} />
                <Route path="/insert_item" element={<InsertItem />} />
                <Route path="/category_table" element={<CategoryTable />} />
            </Routes>
        </>
    );
};

export default Index;
