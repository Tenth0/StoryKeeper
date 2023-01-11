import React from "react";
import PaginationBar from "@/components/PaginationBar";
import styled from "styled-components";

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

const HomeFooter:React.FC = () => {
    return (
        <Pagination>
            <PaginationBar />
        </Pagination>
    );
};

export default HomeFooter;
