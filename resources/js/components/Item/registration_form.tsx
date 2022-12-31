import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

const RegistrationForm = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const readTimeRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const selectCategory = event.currentTarget.category.value;

        const itemData = {
            filename: fileRef.current?.value || "",
            title: titleRef.current?.value || "",
            category_id: selectCategory,
            read_time: readTimeRef.current?.value || "",
            comment: commentRef.current?.value || "",
        };
        itemData["category_id"] = Number(itemData["category_id"]);
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
                        <Form.Control
                            type="file"
                            name="filename"
                            ref={fileRef}
                        />
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
                            ref={titleRef}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">
                        カテゴリ－
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="カテゴリー" name="category">
                            <option key="0" value={0}></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="time">
                    <Form.Label column sm="2">
                        読んだ日
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="date"
                            name="read_time"
                            ref={readTimeRef}
                        />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>コメント</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="comment"
                        rows={3}
                        ref={commentRef}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                >
                    追加
                </Button>
            </Form>
        </>
    );
};

export default RegistrationForm;
