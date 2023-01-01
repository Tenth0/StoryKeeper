import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillTrashFill } from "react-icons/bs";
import { useRecoilValue } from 'recoil';
import { categoriesState } from '../../states/categories';
import { Category } from '../../types';

const CategoryList:React.FC = () => {
    const Categories = useRecoilValue(categoriesState)
    console.log(Categories)
    if (!Array.isArray(Categories)) {
      return null
    }
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const CategoryModal:React.FC  = () => {
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
        )
    }
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
          <tbody>
            <tr>
              <td width={"5%"}>1</td>
              <td width={"5%"}><Button variant="secondary" onClick={handleShow}><BsFillTrashFill /></Button></td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td width={"5%"}><Button variant="secondary" onClick={handleShow}><BsFillTrashFill /></Button></td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td width={"5%"}><Button variant="secondary" onClick={handleShow}><BsFillTrashFill /></Button></td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <CategoryModal />
    </>
  )
}

export default CategoryList