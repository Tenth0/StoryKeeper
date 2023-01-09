import React from "react";
import CategoryList from "@/components/Category/CategoryList";
import AddCategory from "@/components/Category/AddCategory";
import styled from "styled-components";

const CategoryBody:React.FC = () => {
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
