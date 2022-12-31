import React from "react";
import PaginationBar from "@/components/pagination_bar";
import styled from "styled-components";

const HomeFooter = () => {
    const Pagination = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 8px;
    `;
    return (
        <Pagination>
            <PaginationBar />
        </Pagination>
    );
};

export default HomeFooter;
