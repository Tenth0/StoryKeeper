import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { BsHeart, BsHeartFill, BsPencil } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { Item, CardData } from "@/types";
import DeleteItem from "./CardsDelete";

// 外したらコメントを更新できるようになった
// styled.divで毎回divが作られているから
// 毎回新しいHTML要素を作る
// paddingより下の要素は毎回新しいDOMの要素に書き換えられる
const Padding = styled.div`
    padding: 4px;
`;

const Flex = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px;
`;

const Cards: React.FC<{}> = () => {
    const [items, setItems] = useRecoilState(itemsState);
    const [editCommentId, setEditCommentId] = useState<number | null>(null);
    // アイテムをダブルクリックしたときに空白にならないようにする
    const [isChangeComment, setIsChangeComment] = useState<boolean>(false);
    const [itemComment, setItemComment] = useState<Record<number, string>>({});
    if (!Array.isArray(items)) {
        return null;
    }

    // お気に入りを帰る関数
    const changeIsFavorite = (id: number) => {
        axios
            .post("/items/change_isFavorite", {
                id: id,
            })
            .then((changeIsFavoriteItem) => {
                const newItems: Item[] = items.map((item: CardData) => {
                    if (item.id === changeIsFavoriteItem.data.id) {
                        return changeIsFavoriteItem.data;
                    } else {
                        return item;
                    }
                });
                setItems(newItems);
            })
            .catch((error) => console.error(error));
    };

    const changeComment = (
        id: number,
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        let newComment: string = event.target.value;
        if (newComment === itemComment[id]) {
            setIsChangeComment(false);
        } else {
            setIsChangeComment(true);
        }
        setItemComment({ ...itemComment, [id]: newComment });
    };

    const updateComment = (id: number) => {
        setEditCommentId(null);
        setIsChangeComment(false);
        const updatedComment = items.map((Comment) => {
            return Comment.id === id
                ? { ...Comment, comment: itemComment[id] }
                : Comment;
        });
        setItems(updatedComment);
        axios
            .post("/items/update", { id: id, comment: itemComment[id] })
            .then()
            .catch((error) => console.error(error));
    };

    return (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
            {items.map((item) => (
                <Col key={item.id}>
                    <Card
                        bg={item.color.toLowerCase()}
                        text={
                            item.color.toLowerCase() === "light"
                                ? "dark"
                                : "white"
                        }
                    >
                        <Card.Header>
                            <Card.Title>{item.title}</Card.Title>
                            <Padding>
                                <Row xs={2} md={2} className="g-4">
                                    <DeleteItem id={item.id} />
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            changeIsFavorite(item.id)
                                        }
                                    >
                                        {item.is_favorite ? (
                                            <BsHeartFill />
                                        ) : (
                                            <BsHeart />
                                        )}
                                    </Button>
                                </Row>
                            </Padding>
                        </Card.Header>
                        <Padding>
                            <Row xs={1} md={2}></Row>
                            <Card.Body
                                onBlur={() => {
                                    isChangeComment
                                        ? updateComment(item.id)
                                        : setEditCommentId(null);
                                }}
                            >
                                {editCommentId === item.id ? (
                                    <textarea
                                        value={
                                            itemComment[item.id] == undefined ||
                                            itemComment[item.id] == "" ||
                                            itemComment[item.id] == null
                                                ? item.comment
                                                : itemComment[item.id]
                                        }
                                        onChange={(
                                            event: React.ChangeEvent<HTMLTextAreaElement>
                                        ) => changeComment(item.id, event)}
                                    ></textarea>
                                ) : (
                                    <Card.Text>{item.comment}</Card.Text>
                                )}
                            </Card.Body>
                            <Flex>
                                <Button
                                    variant="secondary"
                                    onClick={() => setEditCommentId(item.id)}
                                >
                                    <BsPencil />
                                    コメント編集
                                </Button>
                            </Flex>
                        </Padding>
                        <Card.Footer>{item.read_time}</Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Cards;
