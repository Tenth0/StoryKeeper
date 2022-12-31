import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cards = () => {
  return (
    <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>タイトル</Card.Title>
                  <Card.Text>
                    長いコメント
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Footer>
                    確認日時：2022/12/02
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    );
}
// <Card.Img variant="top" src="/black.png"/>

export default Cards
