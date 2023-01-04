import React from "react";
import styled from "styled-components";
import InputForm from "./input_form";
import Cards from "@/components/Card/cards";

const HomeBody = () => {
    const FormMargin = styled.div`
        margin: 16px;
    `;
    const CardsMargin = styled.div`
        margin-left: 16px;
        margin-right: 16px;
    `;
    return (
        <>
            <FormMargin>
                <InputForm />
            </FormMargin>
            <CardsMargin>
                <Cards />
            </CardsMargin>
        </>
    );
};

export default HomeBody;
