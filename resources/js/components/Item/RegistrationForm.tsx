import React, { useState, useRef } from "react";
import axios, { AxiosError } from "axios";
import styled from "styled-components";
import { Form, Col, Row } from "react-bootstrap";
import { Category } from "@/types";
import { useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import FormButtons from "./FormButtons";
import ToastSuccess from "@/components/Toast/ToastSuccess";
import ToastError from "@/components/Toast/ToastError";

const ErrorMessage = styled.p`
    color: red;
`;

const WhiteColor = styled.div`
    color: white;
    margin-left : 16px;
    margin-right: 16px;
`;

const RegistrationForm: React.FC = () => {
    const [errors, setErrors] = useState<{ title: string }>({ title: "" });
    const titleRef = useRef<HTMLInputElement>(null);
    const readTimeRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const categories = useRecoilValue(categoriesState);
    // トーストを表示させるステート
    const [showToastError, setShowToastError] = useState<boolean>(false);
    const [showToastSuccess, setShowToastSuccess] = useState<boolean>(false);

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
            .then(() => {
                setErrors({ title: "" });
                formRef.current?.reset();
                setShowToastSuccess(true);
                setTimeout(() => setShowToastSuccess(false), 3000);
            })
            .catch((error:AxiosError<{ errors:{title:string } }>) => {
                if (error.response) {
                    setErrors({
                        title: error.response.data.errors.title,
                    });
                }
                setShowToastError(true);
                setTimeout(() => setShowToastError(false), 3000);
            });
    };

    return (
        <>
            <ToastSuccess show={showToastSuccess} />
            <ToastError show={showToastError} />

            <WhiteColor>
                <Form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
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
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
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
                    <FormButtons />
                </Form>
            </WhiteColor>
        </>
    );
};
export default RegistrationForm;
