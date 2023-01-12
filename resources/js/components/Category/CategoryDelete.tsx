import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { Category } from "@/types";
import { categoriesState } from "../../states/categories";
import ToastSuccess from "../Toast/ToastSuccess";
import ToastError from "../Toast/ToastError";

const CategoryModal: React.FC<{
    modalShow: boolean;
    setModalShow: (show: boolean) => void;
    selectedCategory: number;
}> = ({ modalShow, setModalShow, selectedCategory }) => {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const handleDeleteCategory = () => {
        const newCategories: Category[] = categories.filter(
            (category) => category.id !== selectedCategory
        );
        setCategories(newCategories);
        setModalShow(false);
        axios
            .post("/categories/delete", { id: selectedCategory })
            .then(() => <ToastSuccess />)
            .catch(() => <ToastError />);
    };
    return (
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Body>このアイテムを削除しますか？</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalShow(false)}>
                    キャンセル
                </Button>
                <Button variant="primary" onClick={handleDeleteCategory}>
                    削除
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const HandleModalShow: React.FC<{ id: number }> = ({ id }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleShowModal = () => {
        setModalShow(true);
    };
    return (
        <>
            <Button onClick={handleShowModal}>
                <BsFillTrashFill />
            </Button>
            <CategoryModal
                modalShow={modalShow}
                setModalShow={setModalShow}
                selectedCategory={id}
            />
        </>
    );
};

export default HandleModalShow;
