import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { Item } from "@/types";
import { itemsState } from "@/states/items";

const ItemModal: React.FC<{
    modalShow: boolean
    setModalShow: (show: boolean) => void
    selectedItem: number
}> = ({ modalShow, setModalShow, selectedItem }) => {
    const [items, setItems] = useRecoilState(itemsState)
    const handleDeleteItem = () => {
        const newItems: Item[] = items.filter(
            (item) => item.id !== selectedItem
        )
        setItems(newItems)
        setModalShow(false)
        axios
            .post("/items/delete", { id: selectedItem })
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error))
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
