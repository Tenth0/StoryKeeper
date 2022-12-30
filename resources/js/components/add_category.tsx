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
                        <Form.Label htmlFor="exampleColorInput">
                            色
                        </Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
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
