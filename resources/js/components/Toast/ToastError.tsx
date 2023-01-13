import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";

const ToastError: React.FC<{show:boolean}> = ({show}) => {
    return (
        <Row>
            <Col xs={6}>
                <Toast
                    bg="danger"
                    show={show}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong>
                            <BsXCircle /> 失敗しました
                        </strong>
                    </Toast.Header>
                </Toast>
            </Col>
        </Row>
    );
};

export default ToastError;
