import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import styled from "styled-components";

const AddCategory = () => {

    const ErrorMessage = styled.p`
        color:red;
    `;

    const [show, setShow] = useState(false);

    const [errors,setErrors] = useState<{title: string; color: string}>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = event.currentTarget.title;
        const color = event.currentTarget.color;

        const categoryData = {
            title: (title as any).value,
            color: (color as HTMLSelectElement).value,
        };
        
        axios
            .post("/category_table/insert_category", categoryData)
            .then(() => {
                setShow(false)
                setErrors({title:'',color:''})
            })
            .catch((error) => setErrors({
                title: error.response.data.errors.title,
                color: error.response.data.errors.color,
            }))
    };

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                カテゴリー追加
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
                            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
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
                            {errors.color && <ErrorMessage>{errors.color}</ErrorMessage>}
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            キャンセル
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                        >
                            追加
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddCategory;
