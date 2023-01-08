import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav,Navbar } from 'react-bootstrap';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/">
        <BsFillMoonStarsFill />
      </Link>
      <Nav className="me-auto">
        <Link to="/">アイテム一覧</Link>
        <Link to="/insert_item">アイテム追加</Link>
        <Link to="/category_table">カテゴリー編集</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar