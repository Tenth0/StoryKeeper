import React, { useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";

const ToastError = () => {
    const [show, setShow] = useState(true);
    return (
        <Row>
            <Col xs={6}>
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">Bootstrap</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Woohoo, you're reading this text in a Toast!
                    </Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
};

export default ToastError;
