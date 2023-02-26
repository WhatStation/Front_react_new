import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';


const NavBarElements = () => {
  return (
      <Navbar className="Nopadding" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="Navbar">
          <Navbar.Brand as={Link} to="/">Place AI</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto Nav-font">
              <Nav.Link eventkey="i" as={Link} to="/">Home</Nav.Link>
              <Nav.Link eventkey={"i"} as={Link} to="/about">About</Nav.Link>
              <Nav.Link eventkey="i" as={Link} to="/Search">Search</Nav.Link>
              <NavDropdown eventkey="i" title="review" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/WriteReview">리뷰 쓰기</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ReviewWall"> 리뷰 모음 </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="Nav-font">
              <Nav.Link href="https://www.notion.so/CP2-project-c38bea4614af4c8699d00d5819a5d2fd">notion</Nav.Link>
              <Nav.Link href="https://github.com/WhatStation">
                github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBarElements;


/*
collapseOnSelect (클릭시 창 자동접힘)이 제대로 되지 않는 오류가 있었는데, 아래의 글을을 참고하여
eventekey를 추가해서 해결했다.
https://github.com/react-bootstrap/react-bootstrap/issues/4082
https://github.com/react-bootstrap/react-bootstrap/issues/5477
https://react-bootstrap-v3.netlify.app/components/navs/

*/


//eventkey={2}


// 어바웃은 잠시 빼둠 <Nav.Link eventkey={"i"} as={Link} to="/about">About</Nav.Link>