import React from "react";
import RegistrationForm from "./RegistrationForm";
import styled from "styled-components";


const InsertItemBody:React.FC = () => {
    return (
        <>
            <Margin>
                <RegistrationForm />
            </Margin>
        </>
    );
};

const Margin = styled.div`
    margin: 16px;
`;

export default InsertItemBody;
