import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddCategory = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>カテゴリー</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="カテゴリー名を入力してください"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label htmlFor="selectColor">色</Form.Label>
                        <Form.Select id="selectColor">
                            <option value="Light">白</option>
                            <option value="Dark">黒</option>
                            <option value="Secondary">灰</option>
                            <option value="Primary">青</option>
                            <option value="Info">水</option>
                            <option value="Success">緑</option>
                            <option value="Danger">黄</option>
                            <option value="Warning">赤</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        追加
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddCategory;
