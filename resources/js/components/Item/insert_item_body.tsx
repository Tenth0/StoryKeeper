import React from "react";
import RegistrationForm from "./registration_form";
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
