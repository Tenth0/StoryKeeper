import React from "react";
import CategoryList from "@/components/category_list";
import AddCategory from "@/components/add_category";
import styled from "styled-components";

const CategoryBody = () => {
    const Flex = styled.div`
        display: flex;
        justify-content: flex-end;
        margin: 16px;
    `;

    return (
        <>
            <Flex >
                <AddCategory />
            </Flex>
            <CategoryList />
        </>
    );
};

export default CategoryBody;
