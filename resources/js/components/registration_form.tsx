import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const RegistrationForm = () => {
    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">
                        ファイル
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="file" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">
                        タイトル
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="タイトルを入力してください"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">
                        カテゴリ－
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="Default select example">
                            <option key="0">カテゴリー</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="comment">
                    <Form.Label column sm="2">
                        読んだ日
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="date" />
                    </Col>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default RegistrationForm;
