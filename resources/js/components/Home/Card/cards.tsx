import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { Item, CardData } from "@/types";
import DeleteItem from "./cards_delete";
import axios from "axios";

const Cards: React.FC<{}> = () => {
    const Padding = styled.div`
        padding: 4px;
    `;

    const [items, setItems] = useRecoilState(itemsState);
    const [editCommentId, setEditCommentId] = useState<number | null>(null);
    const [isChangeComment, setIsChangeComment] = useState<boolean>(false);
    const [itemComment, setItemComment] = useState<Record<number, string>>({});
    if (!Array.isArray(items)) {
        return null;
    }

    const changeIsFavorite = (id: number) => {
        axios
            .post("/items/change_isFavorite", {
                id: id,
            })
            .then((changeIsFavoriteItem) => {
                const newItems: Item[] = items.map((item: Item) => {
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
        const newComment = event.target.value;
        if (newComment === itemComment[id]) {
            setIsChangeComment(false);
        } else {
            setIsChangeComment(true);
        }
        setItemComment({ ...items, [id]: newComment });
    };

    const updateComment = (id: number) => {
        if (itemComment[id] === "") {
            return;
        }
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
            .then((res) => console.log(res.data))
            .catch((error) => console.error(error));
    };
    console.log("再レンダリングされました");

    return (
        <Row xs={1} md={2} className="g-4">
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
                            <Card.Body
                                onDoubleClick={() => setEditCommentId(item.id)}
                                onBlur={() => {
                                    isChangeComment
                                        ? updateComment(item.id)
                                        : setEditCommentId(null);
                                }}
                            >
                                {editCommentId === item.id ? (
                                    <textarea
                                        value={
                                            itemComment[item.id] === undefined
                                            ? item.comment||""
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
                        </Padding>
                        <Card.Footer>{item.read_time}</Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Cards;
