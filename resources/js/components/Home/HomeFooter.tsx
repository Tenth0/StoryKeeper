import React from "react";
import PaginationBar from "@/components/PaginationBar";
import styled from "styled-components";

const HomeFooter:React.FC = () => {
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
