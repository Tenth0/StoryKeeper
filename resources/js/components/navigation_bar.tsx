import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">一覧画面</Nav.Link>
        <Nav.Link href="/add_item">タイトル追加</Nav.Link>
        <Nav.Link href="/add_category">カテゴリー追加</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar