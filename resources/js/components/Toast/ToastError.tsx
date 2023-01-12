import React, { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";

const ToastError = () => {
    return (
        <Row>
            <Col xs={6}>
                <Toast
                    delay={2000}
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
