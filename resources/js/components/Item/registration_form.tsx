import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Form,Col,Row,Button }  from "react-bootstrap";
import { Category } from "@/types";
import { useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";

const ErrorMessage = styled.p`
    color: red;
`;

const RegistrationForm = () => {
    const [errors, setErrors] = useState<{ title: string }>({ title: "" });
    const titleRef = useRef<HTMLInputElement>(null);
    const readTimeRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const categories = useRecoilValue(categoriesState);
    if (!Array.isArray(categories)) {
        return null;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const selectCategory = event.currentTarget.category.value;

        const itemData = {
            title: titleRef.current?.value || "",
            category_id: selectCategory,
            read_time: readTimeRef.current?.value || "",
            comment: commentRef.current?.value || "",
        };
        itemData.category_id = Number(itemData.category_id);
        axios
        .post("/api/insert_item", itemData)
            .then((res) => {
                setErrors({ title: "" });
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error(error);
                setErrors({
                    title: error.response.data.errors.title,
                });
            }
        );
    };

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" >
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
                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">
                        カテゴリ－
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" name="category">
                            <option value="0"></option>
                            {categories.map((category: Category) => (
                                <option key={category.id} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
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
    );
};
export default RegistrationForm;
