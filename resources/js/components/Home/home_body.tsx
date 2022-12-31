import React from "react";
import styled from "styled-components";
import InputForm from "./input_form";
import Cards from "./cards";

const HomeBody = () => {
    const Margin = styled.div`
        margin: 16px;
    `;
    return (
        <>
            <Margin>
                <InputForm />
            </Margin>
            <Cards />
        </>
    );
};

export default HomeBody;
