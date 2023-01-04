import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import { itemsState } from "@/states/items";
import { Category } from "@/types";
import axios from "axios";

const InputForm: React.FC = () => {
  const [titleKeyword, setTitleKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');  
  const categories = useRecoilValue(categoriesState);
  const setItems = useSetRecoilState(itemsState);
  
  const searchRecord = async () => {
    try {
      const items = await axios.get(
        '/search?title_keyword=' +
          titleKeyword +
          '&select_category=' +
          selectedCategory
          );
      setItems(items.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    searchRecord();
  }, [titleKeyword, selectedCategory]);

  if (!Array.isArray(categories)) {
    return null;
  }
  
  return (
    <Row className='g-2'>
      <Col md>
        <FloatingLabel label='タイトル'>
          <Form.Control
            id='title_keyword'
            type='text'
            placeholder='例:ノーゲーム・ノーライフ、キングダム'
            onBlur={() => setTitleKeyword(document.getElementById('title_keyword')!.value)}
          />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId='floatingSelectGrid' label='カテゴリー'>
          <Form.Select
            id='select_category'
            onChange={() => setSelectedCategory(document.getElementById('select_category')!.value)}
          >
            <option></option>
            {categories.map((category: Category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default InputForm;
