import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { Item } from '@/types';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { itemsState } from '../../states/items';


const CardsDelete = () => {
    const [modalShow, setModalShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState<number>()
    const [items,setItems] = useRecoilState(itemsState)
    const deleteItem = () => {
        // 型
        const newItems: Item[] = items.filter((item) => item.id !== selectedItem);
        setItems(newItems)
        setModalShow(false)
        axios
            .post("/item_list/delete_item", { id: selectedItem })
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error))
    }
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
              <Button variant="primary" onClick={deleteItem}>
                  削除
              </Button>
          </Modal.Footer>
      </Modal>
  )
}

export default CardsDelete