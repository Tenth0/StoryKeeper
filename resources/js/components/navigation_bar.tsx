import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><BsFillMoonStarsFill /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">アイテム一覧</Nav.Link>
        <Nav.Link href="/insert_item">アイテム編集</Nav.Link>
        <Nav.Link href="/category_table">カテゴリー編集</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar