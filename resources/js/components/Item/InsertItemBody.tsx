import React from "react";
import RegistrationForm from "./RegistrationForm";
import styled from "styled-components";

const Margin = styled.div`
    margin: 16px;
`;

const InsertItemBody:React.FC = () => {
    return (
        <>
            <Margin>
                <RegistrationForm />
            </Margin>
        </>
    );
};

export default InsertItemBody;
