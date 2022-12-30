import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const RegistrationForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const filename = event.currentTarget.filename;
        const title = event.currentTarget.title;
        const category = event.currentTarget.category;
        const read_time = event.currentTarget.read_time;
        const comment = event.currentTarget.comment;

        const itemData = {
            filename: (filename as HTMLInputElement).value,
            title: (title as any).value,
            category: (category as HTMLSelectElement).value,
            read_time: (read_time as HTMLInputElement).value,
            comment: (comment as HTMLTextAreaElement).value,
        };
        console.log(itemData)
        axios
            .post("/api/insert_item", itemData)
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">
                        ファイル
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="file" name="filename"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">
                        タイトル
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="タイトルを入力してください"
                            autoFocus
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">
                        カテゴリ－
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="カテゴリー" name="category">
                            <option key="0" value="0"></option>
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
                        <Form.Control type="date" name="read_time"/>
                    </Col>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" name="comment" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    追加
                </Button>
            </Form>
        </>
    );
};

export default RegistrationForm;
