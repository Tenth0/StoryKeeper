import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillTrashFill } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import axios from "axios";

const CategoryList: React.FC = () => {
    const categories = useRecoilValue(categoriesState);
    const setCategories = useSetRecoilState(categoriesState);
    const [modalShow, setModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<number>();

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    if (!Array.isArray(categories)) {
        return null;
    }

    const deleteCategory = () => {
        // 型
        setCategories(
            categories.filter((item) => item.id !== selectedCategory)
        );
        setModalShow(false);
        axios
            .post("/category_table/delete_category", { id: selectedCategory })
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error));
    };

    const handleModalShow = (id: number) => {
        setModalShow(true);
        setSelectedCategory(id);
    };

    const CategoryModal: React.FC = () => {
        return (
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Body>このカテゴリーを削除しますか？</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setModalShow(false)}
                    >
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={deleteCategory}>
                        削除
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    const CategoryTable = () => {
        return categories.map((category: Category, idx: number) => (
            <tr key={category.id}>
                <td width={"5%"}>{idx + 1}</td>
                <td width={"5%"}>
                    <Button
                        variant="secondary"
                        onClick={() => handleModalShow(category.id)}
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
                <tbody>{CategoryTable()}</tbody>
            </Table>
            <CategoryModal />
        </>
    );
};

export default CategoryList;
