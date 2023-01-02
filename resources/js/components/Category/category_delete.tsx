import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Category } from "@/types";
import axios from "axios";
import { categoriesState } from "../../states/categories";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const CategoryModal: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const handleDeleteCategory = () => {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const newCategories: Category[] = categories.filter(
      (category) => category.id !== selectedCategory
    );
    setCategories(newCategories);
    setModalShow(false);
    axios
      .post("/category_table/delete_category", { id: selectedCategory })
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)}>
      <Modal.Body>このカテゴリーを削除しますか？</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalShow(false)}>
          キャンセル
        </Button>
        <Button variant="primary" onClick={handleDeleteCategory}>
          削除
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const HandleModalShow:React.FC<{}> = (id: number) => {
  setModalShow(true);
  setSelectedCategory(id);
}

export { CategoryModal,HandleModalShow };
