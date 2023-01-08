import React from "react";
import RegistrationForm from "./RegistrationForm";
import styled from "styled-components";
const InsertItemBody = () => {
    const Margin = styled.div`
        margin: 16px;
    `;
    return (
        <>
            <Margin>
                <RegistrationForm />
            </Margin>
        </>
    );
};

export default InsertItemBody;