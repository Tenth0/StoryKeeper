import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Modal,Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { ItemsType } from "@/types";
import { itemsState } from "@/states/items";
import ToastSuccess from "@/components/Toast/ToastSuccess";
import ToastError from "@/components/Toast/ToastError";

const ItemModal: React.FC<{
    modalShow: boolean
    setModalShow: (show: boolean) => void
    selectedItem: number
}> = ({ modalShow, setModalShow, selectedItem }) => {
    const [items, setItems] = useRecoilState(itemsState)
    const handleDeleteItem = () => {
        const newItems: ItemsType = items.filter(
            (item) => item.id !== selectedItem
        )
        setItems(newItems)
        setModalShow(false)
        axios
            .post("/items/delete", { id : selectedItem })
            .then(() => <ToastSuccess />)
            .catch(() => <ToastError />)
    }
    return (
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Body>このカテゴリーを削除しますか？</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalShow(false)}>
                    キャンセル
                </Button>
                <Button variant="primary" onClick={handleDeleteItem}>
                    削除
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const DeleteItem: React.FC<{ id: number }> = ({ id }) => {
  const [modalShow, setModalShow] = useState(false)
  const handleShowModal = () => {
      setModalShow(true)
  }
  return (
    <>
      <Button onClick={handleShowModal}>
          <BsFillTrashFill />
      </Button>
      <ItemModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          selectedItem={id}
      />
    </>
  )
}

export default DeleteItem
