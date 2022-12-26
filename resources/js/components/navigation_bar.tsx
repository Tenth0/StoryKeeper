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
        <Nav.Link href="/add_item">追加画面</Nav.Link>
        <Nav.Link href="#pricing">カテゴリー一覧</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar