import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav,Navbar } from 'react-bootstrap';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand><BsFillMoonStarsFill /></Navbar.Brand>
      </LinkContainer>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>アイテム一覧</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/insert_item">
          <Nav.Link>アイテム追加</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/category_table">
          <Nav.Link>カテゴリー編集</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar