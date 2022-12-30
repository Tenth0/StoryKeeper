import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddCategory = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = event.currentTarget.title;
        const color = event.currentTarget.color;
        // if(!title || !color ) { return }

        const categoryData = {
            title: (title as any).value,
            color: (color as HTMLSelectElement).value,
        };
        alert(categoryData);
        axios
            .post("/category_table/insert_category", categoryData)
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                カテゴリー追加
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                        <Button variant="secondary" onClick={handleClose}>
                            キャンセル
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            onClick={handleClose}
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
