import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ButtonMargin = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px;
`;
const AddButtonMargin = styled.div`
    margin-right: 8px;
`;

const FormButtons: React.FC = () => {
    return (
        <ButtonMargin>
            <AddButtonMargin>
                <Button type="submit" variant="primary">
                    新規追加
                </Button>
            </AddButtonMargin>
            <Link to="/">
                <Button variant="secondary">一覧に戻る</Button>
            </Link>
        </ButtonMargin>
    );
};

export default FormButtons;
