import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import InputForm from "./input_form";
import Cards from "@/components/Home/Card/cards";

const HomeBody = () => {
    const FormMargin = styled.div`
        margin: 16px;
    `;
    const CardsMargin = styled.div`
        margin-left: 16px;
        margin-right: 16px;
    `;
    const AddButtonMargin = styled.div`
        display: flex;
        justify-content: flex-end;
        margin: 16px;
    `;
    return (
        <>
            <AddButtonMargin>
                <Link to="/insert_item">
                    <Button>アイテム追加</Button>
                </Link>
            </AddButtonMargin>
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
