import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav,Navbar } from 'react-bootstrap';

const ReloadNavigationBar:React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><img src='./images/StoryKeeper.png' style={imgStyle}/></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">アイテム一覧</Nav.Link>
        <Nav.Link href="/insert_item">アイテム追加</Nav.Link>
        <Nav.Link href="/category_table">カテゴリー編集</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
};

const imgStyle = {
  width: '30%',
  height: '50%',
}

export default ReloadNavigationBar

