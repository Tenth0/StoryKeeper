import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillTrashFill } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";

const CategoryList: React.FC = () => {
    const categories = useRecoilValue(categoriesState);
    const setCategories = useSetRecoilState(categoriesState);
    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null
    );

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    if (!Array.isArray(categories)) {
        return null;
    }

    const handleClose = () => setShow(false);
    const handleShow = (category: Category) => {
        setShow(true);
        setSelectedCategory(category);
    };

    const CategoryModal: React.FC = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>このカテゴリーを削除しますか？</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        削除
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    const renderCategoryRows = () => {
        return categories.map((category: Category, idx: number) => (
            <tr key={idx}>
                <td width={"5%"}>{idx + 1}</td>
                <td width={"5%"}>
                    <Button
                        variant="secondary"
                        onClick={() => handleShow(category)}
                    >
                        <BsFillTrashFill />
                    </Button>
                </td>
                <td>{category.title}</td>
                <td>{category.color}</td>
            </tr>
        ));
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>削除</th>
                        <th>タイトル</th>
                        <th>カラー</th>
                    </tr>
                </thead>
                <tbody>{renderCategoryRows()}</tbody>
            </Table>
            <CategoryModal />
        </>
    );
};

export default CategoryList;
