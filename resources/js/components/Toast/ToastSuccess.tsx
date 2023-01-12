import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

const ToastSuccess: React.FC<boolean> = (show) => {
    return (
        <Row>
            <Col xs={6}>
                <Toast
                    bg="success"
                    show={show}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong>
                            <Toast.Body>
                                <BsCheckCircle /> 成功しました
                            </Toast.Body>
                        </strong>
                    </Toast.Header>
                </Toast>
            </Col>
        </Row>
    );
};

export default ToastSuccess;
