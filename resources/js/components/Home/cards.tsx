import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useRecoilValue } from "recoil";
import { itemsState } from "@/states/items";
import { Item } from "@/types";

const Cards: React.FC<{}> = () => {
    const items = useRecoilValue(itemsState);
    console.log(items);
    if (!Array.isArray(items)) {
        return null;
    }
    return (
        <Row xs={1} md={2} className="g-4">
            {items.map((item: Item, idx: number) => (
                <Col key={idx}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
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
