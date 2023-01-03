import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import styled from "styled-components";

const ErrorMessage = styled.p`
    color: red;
`;

const RegistrationForm = () => {
    const [errors, setErrors] = useState<{ title: string }>({})
    const titleRef = useRef<HTMLInputElement>(null)
    const readTimeRef = useRef<HTMLInputElement>(null)
    const commentRef = useRef<HTMLTextAreaElement>(null)
    const fileRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const selectCategory = event.currentTarget.category.value

        const itemData = {
            filename: fileRef.current?.value || "",
            title: titleRef.current?.value || "",
            category_id: selectCategory,
            read_time: readTimeRef.current?.value || "",
            comment: commentRef.current?.value || "",
        }
        itemData.category_id = Number(itemData.category_id)

        axios
            .post("/api/insert_item", itemData)
            .then((res) => {
                setErrors({ title: "" })
            })
            .catch((error) => {
                console.error(error)
                setErrors({
                    title: error.response.data.errors.title,
                })
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
                        {errors.title && (
                            <ErrorMessage>{errors.title}</ErrorMessage>
                        )}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="file">
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
                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">
                        カテゴリ－
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" name="category">
                            <option value="0"></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
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
                        rows={3}
                        name="comment"
                        ref={commentRef}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    送信
                </Button>
            </Form>
        </>
    )
}
export default RegistrationForm
