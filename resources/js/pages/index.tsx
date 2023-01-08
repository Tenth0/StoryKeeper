import React from "react";
import { Route, Routes } from "react-router-dom";
import Items from "@/pages/Items";
import InsertItem from "@/pages/InsertItem";
import CategoryTable from "@/pages/CategoryTable";

const Index: React.FC<{}> = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Items />} />
                <Route path="/insert_item" element={<InsertItem />} />
                <Route path="/category_table" element={<CategoryTable />} />
            </Routes>
        </>
    );
};

export default Index;
