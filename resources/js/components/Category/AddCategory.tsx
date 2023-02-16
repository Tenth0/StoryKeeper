import React, { HTMLInputTypeAttribute, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import axios, { AxiosError, AxiosResponse } from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import ToastSuccess from "../Toast/ToastSuccess";
import ToastError from "../Toast/ToastError";

const AddCategory: React.FC = () => {
    const categories = useRecoilValue(categoriesState);
    const setCategories = useSetRecoilState(categoriesState);

    const [show, setShow] = useState(false);

    const [errors, setErrors] = useState<{ title: string; color: string; }>({title:"",color:""});

    // トーストを表示させるステート
    const [showToastError, setShowToastError] = useState<boolean>(false);
    const [showToastSuccess, setShowToastSuccess] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = event.currentTarget.title as unknown;
        const color = event.currentTarget.color;

        const categoryData = {
            title: (title as HTMLInputElement).value,
            color: (color as HTMLSelectElement).value,
        };

        axios
            .post("/categories/insert", categoryData)
            .then((res:AxiosResponse<Category>) => {
                setShow(false);
                setErrors({ title: "", color: "" });
                const newCategories: Category[] = [...categories, res.data];
                setCategories(newCategories);
                setShowToastSuccess(true);
                setTimeout(() => setShowToastSuccess(false), 3000);
            })
            .catch((error:AxiosError<{ errors:{title:string,color:string} }>) => {
                if (error.response) {
                    setErrors({
                        title: error.response.data.errors.title,
                        color: error.response.data.errors.color,
                    });
                }
                setShowToastError(true);
                setTimeout(() => setShowToastError(false), 3000);
            });
    };

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                カテゴリー追加
            </Button>
            
            <ToastSuccess show={showToastSuccess}/>
            <ToastError show={showToastError}/>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>カテゴリーを追加しますか</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>カテゴリー</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="カテゴリー名を入力してください"
                                autoFocus
                            />
                            {errors.title && (
                                <ErrorMessage>{errors.title}</ErrorMessage>
                            )}
                        </Form.Group>
                        <Form.Label htmlFor="selectColor">色</Form.Label>
                        <Form.Select id="selectColor" name="color">
                            <option value="Light">白</option>
                            <option value="Dark">黒</option>
                            <option value="Secondary">灰</option>
                            <option value="Primary">青</option>
                            <option value="Info">水</option>
                            <option value="Success">緑</option>
                            <option value="Danger">黄</option>
                            <option value="Warning">赤</option>
                        </Form.Select>
                        {errors.color && (
                            <ErrorMessage>{errors.color}</ErrorMessage>
                        )}
                        <ButtonFlex>
                            <Row xs={1} md={2} className="g-4">
                                <Button type="submit" variant="primary">
                                    追加
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => setShow(false)}
                                >
                                    キャンセル
                                </Button>
                            </Row>
                        </ButtonFlex>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

const ErrorMessage = styled.p`
    color: red;
`;

const ButtonFlex = styled.div`
    margin-top: 8px;
`;

export default AddCategory;
