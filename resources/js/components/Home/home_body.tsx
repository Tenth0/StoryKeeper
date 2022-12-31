import React from "react";
import styled from "styled-components";
import InputForm from "../input_form";
import Cards from "../cards";

const HomeBody = () => {
    const Space = styled.div`
        margin: 16px;
    `;
    return (
        <>
            <Space>
                <InputForm />
            </Space>
            <Cards />
        </>
    );
};

export default HomeBody;
