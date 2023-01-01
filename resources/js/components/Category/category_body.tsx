import React from "react";
import CategoryList from "@/components/Category/category_list";
import AddCategory from "@/components/Category/add_category";
import styled from "styled-components";

const CategoryBody = () => {
    const Flex = styled.div`
        display: flex;
        justify-content: flex-end;
        margin: 16px;
    `;

    const Margin = styled.div`
        margin: 0px 16px 8px 16px;
    `;

    return (
        <>
            <Flex>
                <AddCategory />
            </Flex>
            <Margin>
                <CategoryList />
            </Margin>
        </>
    );
};

export default CategoryBody;
