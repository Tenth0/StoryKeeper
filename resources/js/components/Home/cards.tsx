import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRecoilValue } from 'recoil';
import { itemsState } from '@/states/items';
import { Item } from '@/types';

const Cards : React.FC<{}> = () => {
  const Items = useRecoilValue(itemsState)
  console.log(Items)
  if (!Array.isArray(Items)) {
    return null
  }
  return (
    <Row xs={1} md={2} className="g-4">
          {Items.map((item:Item, idx:number) => (
            <Col key={idx}>
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
