import React, { useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";

const ToastError: React.FC = () => {
    const [show, setShow] = useState(true);
    return (
        <Row>
            <Col xs={6}>
                <Toast
                    bg="danger"
                    onClose={() => setShow(false)}
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
