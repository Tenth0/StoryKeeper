import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { itemsState } from "@/states/items";
import { Item,CardData } from "@/types";
import DeleteItem from './cards_delete';
import axios from "axios";

const Cards: React.FC<{}> = () => {
    const Space = styled.div`
        padding:4px;
    `;
    const [items,setItems] = useRecoilState(itemsState);
    if (!Array.isArray(items)) {
        return null;
    }
    
    const changeIsFavorite = (id:number,isFavorite:boolean) => {
        axios.post("/items/change_isFavorite", { 
            id: id,
            isFavorite: isFavorite
        })
        .then((changeIsFavoriteItem) => {
            const newItems: Item[] = items.map((item:Item) => {
                if (item.id === changeIsFavoriteItem.data.id) {
                  return changeIsFavoriteItem.data;
                } else {
                  return item;
                }
            });
            setItems(newItems);
        })
        .catch((error) => console.error(error))
    }
    return (
        <Row xs={1} md={2} className="g-4">
            {items.map((item: CardData, idx: number) => (
                <Col key={idx}>
                    <Card>
                        <Card.Header>
                            <Card.Title>{item.title}</Card.Title>
                            <Space>
                                <Row xs={2} md={2} className="g-4">
                                <DeleteItem id={item.id} />
                                <Button
                                variant="danger"
                                onClick={() => changeIsFavorite(item.id,item.is_favorite)}
                                >
                                {
                                    item.is_favorite 
                                    ? <BsHeartFill />
                                    : <BsHeart />
                                }
                                </Button>
                                </Row>
                            </Space>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{item.comment}</Card.Text>
                            <Card.Footer>{item.read_time}</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
// <Card.Img variant="top" src="/black.png"/>

export default Cards;
